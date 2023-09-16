import db from "../db/modle/index.js";
import { Op } from "sequelize";

class DocumentService {
    findDocumentById = async (id, userId) => {
        let document = await db.Document.findOne({
            where:{
                [Op.or]: [
                    {
                        id: id,
                        userId,
                    },
                    {
                        id: id,
                        isPublic: true
                    }
                ]
            },
        });

        if(!document){
            const sharedDocument = await db.DocumentUser.findAll({
                where:{
                    documentId: id,
                    userId: userId
                },
                include: {
                    model: db.Document
                },
            });

            if(!sharedDocument) return null;

            document = sharedDocument.document;
        }

        return document;
    }
}

const documentService = new DocumentService();

export default documentService;
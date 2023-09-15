import { documentService } from "../../service/document-service.js";
import { validationResult } from "express-validator";
import db from "../../db/modle/index.js";

class DocumnetController {
    create = async (req, res) => {
        // console.log(req.user.id)
        const document = await db.Document.create({
            userId: req.user?.id,
        });
        return res.status(201).json(document);
    }
    getAll = async (req, res) =>{
        const documents = await db.Document.findAll({
            where: {
                userId: req.user.id,
            }
        });
        const documentUser = await db.DocumentUser.findAll({
            where: {
                userId: req.user.id,
            },
            include: {
                model: db.Document
            }
        });

        const sharedDocument = documentUser.map((documentUser)=>{
            documentUser.documnet
        });
        documents.push(...sharedDocument);
        
        return res.status(200).json(documents);
    }
}

const documentController = new DocumnetController();

export { documentController };
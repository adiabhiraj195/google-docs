import documentService from "../../service/document-service.js";
import { validationResult } from "express-validator";
import db from "../../db/modle/index.js";

class DocumnetController {
    create = async (req, res) => {
        // console.log(req.user.id)
        const document = await db.Document.create({
            userId: req.user?.id,
        });

        document.title = "Untitled Doc";
        document.save();
        return res.status(201).json(document);
    }
    getAll = async (req, res) => {
        const documents = await db.Document.findAll({
            where: {
                userId: req.user.id,
            }
        });
        // console.log(documents, 'documents')
        const documentUsers = await db.DocumentUser.findAll({
            where: {
                userId: req.user.id,
            },
            include: {
                model: db.Document
            }
        }); 
        // sharedDocument
        documentUsers.map((documentUser) => {
            documentUser.document
            documents.push(documentUser.document);
            // console.log(documentUser.document, 'maped document')
        });

        return res.status(200).json(documents);
    }
    update = async (req, res) => {
        const err = validationResult(req);
        if (!(err.isEmpty())) return res.status(400).json(err);

        const { id } = req.params;
        const { title, content } = req.body;

        const document = await documentService.findDocumentById(parseInt(id), parseInt(req.user.id));
        // console.log(document);
        if (document === null) return res.sendStatus(404);

        if (title !== undefined && title !== null) document.title = title;
        if (content !== undefined && content !== null) document.content = content;
        // if (isPublic !== undefined && isPublic !== null)
        //     document.isPublic = isPublic;
        await document.save();

        return res.sendStatus(200);
    }

    getOne = async (req, res) => {
        if (!req.user) return res.sendStatus(401);

        const { id } = req.params;

        const document = await documentService.findDocumentById(parseInt(id), parseInt(req.user.id));
        // console.log(document, "this is document")
        if (!document) return res.status(404);

        return res.status(200).json(document);
    }
    deleteDoc = async (req, res) => {
        if (!req.user) return res.sendStatus(401);
        const { id } = req.params;

        await db.Document.destroy({
            where: {
                id: id,
                userId: req.user?.id,
            },
        });

        return res.sendStatus(200);
    }
}

const documentController = new DocumnetController();

export { documentController };
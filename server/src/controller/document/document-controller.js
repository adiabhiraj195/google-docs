import { documentService } from "../../service/document-service.js";
import { validationResult } from "express-validator";
import db from "../../db/modle/index.js";

class DocumnetController {
    create = async (req, res) => {
        const title = req.body.title;
        console.log(req.user.id)
        const document = await db.Document.create({
            userId: req.user?.id,
            title: title
        });
        return res.status(201).json(document);
    }
}

const documentController = new DocumnetController();

export { documentController };
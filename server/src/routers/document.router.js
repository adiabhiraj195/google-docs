import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import { documentController } from "../controller/document/document-controller.js";

const document = Router();

document.post('/', authenticate, documentController.create);
document.get('/', authenticate, documentController.getAll);

export default document;
import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import { documentController } from "../controller/document/document-controller.js";

const document = Router();

document.post('/', authenticate, documentController.create);
document.get('/', authenticate, documentController.getAll);
document.put('/:id', authenticate, documentController.update); //add document validation
document.get('/:id', authenticate, documentController.getOne);
document.delete('/:id', authenticate, documentController.deleteDoc);

export default document;
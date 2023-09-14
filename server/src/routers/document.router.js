import { Router } from "express";
import { authenticate } from "../middleware/auth.js";
import { documentController } from "../controller/document/document-controller.js";

const document = Router();

document.post('/', authenticate, documentController.create);

export default document;
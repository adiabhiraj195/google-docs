import { Sequelize } from "sequelize";
import sequelize from "../../config/db.config.js";
import { User } from "./user.modle.js";
import { Document } from "./document.modle.js";
import { DocumentUser } from "./document-user.modle.js";

Document.belongsTo(User);
User.hasMany(Document);
DocumentUser.belongsTo(User);
User.hasMany(DocumentUser)
DocumentUser.belongsTo(Document);
Document.hasMany(DocumentUser);

const db = {
    Sequelize,
    sequelize,
    User,
    Document,
    DocumentUser
};

export default db;
import { DataTypes } from "sequelize";
import sequelize from "../../config/db.config.js";

const DocumentUser = sequelize.define('documentUser', {
    permission: DataTypes.ENUM('VIEW', 'EDIT'),
    email: DataTypes.STRING,
    // userId: DataTypes.NUMBER,
    // documentId: DataTypes.NUMBER,

});

export { DocumentUser }
import { DataTypes } from "sequelize";
import sequelize from "../../config/db.config.js";

const DocumentUser = sequelize.define('document-user', {
    permission: DataTypes.ENUM('VIEW', 'EDIT'),

});

export { DocumentUser }
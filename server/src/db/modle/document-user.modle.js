import { DataTypes } from "sequelize";
import sequelize from "../../config/db.config.js";

const DocumentUser = sequelize.define('documentUser', {
    permission: DataTypes.ENUM('VIEW', 'EDIT'),

});

export { DocumentUser }
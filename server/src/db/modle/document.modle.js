import { DataTypes } from "sequelize";
import sequelize from "../../config/db.config.js";
import { DocumentUser } from "./document-user.modle.js";

const Document = sequelize.define('document', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    // users: {
    //     type: DataTypes.ARRAY
    // }
});

export {Document}
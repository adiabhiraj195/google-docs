import { DataTypes } from "sequelize";
import sequelize from "../../config/db.config.js";

const Document = sequelize.define('document', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,

    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    // userId: {
    //     type: DataTypes.NUMBER,
    // }
    // users: {
    //     type: DataTypes.ARRAY
    // }
});

export {Document}
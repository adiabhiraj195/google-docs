import PermissionEnum from "../enums/permission-enum";

interface DocumentUserInterface {
    permission: PermissionEnum;
    userId: number;
    documentId: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    id: number
}

export default DocumentUserInterface;
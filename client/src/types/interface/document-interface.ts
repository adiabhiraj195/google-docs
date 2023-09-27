import DocumentUserInterface from '../interface/document-user-interface';

interface DocumentInterface {
    id: number;
    title: string;
    content: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    users: Array<DocumentUserInterface | null>;
    isPublic: boolean;
}

export default DocumentInterface
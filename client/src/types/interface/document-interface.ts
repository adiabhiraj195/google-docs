import DocumentUserInterface from '../interface/document-user-interface';

interface DocumentInterface {
    id: number;
    title: string | null;
    content: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    users: Array<DocumentUserInterface>;
    isPublic: boolean;
}

export default DocumentInterface
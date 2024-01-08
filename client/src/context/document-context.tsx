import { createContext, useState, Dispatch, SetStateAction } from "react";
import DocumentInterface from "../types/interface/document-interface";
import useAuth from "../hooks/useAuth";
import DocumentService from "../service/document-service";

interface DocumentContextInterface {
    document: DocumentInterface | null;
    setDocument: Dispatch<SetStateAction<DocumentInterface | null>>;
    setDocumentTitle: (title: string) => void;
    saving: boolean;
    setSaving: Dispatch<SetStateAction<boolean>>;
    saveDocument: (updatedDocument: DocumentInterface) => Promise<void>;
    shareDocWindow: boolean;
    setShareDocWindow: Dispatch<SetStateAction<boolean>>;
    currentUsers: Set<string>;
    setCurrentUsers: Dispatch<SetStateAction<Set<string>>>;
}

const defaultValues = {
    document: null,
    setDocument: () => { },
    setDocumentTitle: () => { },
    saving: false,
    setSaving: () => { },
    saveDocument: async () => { },
    shareDocWindow: false,
    setShareDocWindow: () => { },
    currentUsers: new Set<string>(),
    setCurrentUsers: () => { },
}

export const DocumentContext = createContext<DocumentContextInterface>(defaultValues);

interface DocumentProviderInterface {
    children: JSX.Element;
}

export const DocumentProvider = ({ children }: DocumentProviderInterface) => {
    const { accessToken } = useAuth();
    const [document, setDocument] = useState<DocumentInterface | null>(defaultValues.document);
    const [saving, setSaving] = useState<boolean>(defaultValues.saving);
    const [shareDocWindow, setShareDocWindow] = useState<boolean>(defaultValues.shareDocWindow);
    const [currentUsers, setCurrentUsers] = useState<Set<string>>(defaultValues.currentUsers);
    const setDocumentTitle = (title: string) => {
        setDocument({ ...document, title } as DocumentInterface);
    }
    const localAT = localStorage.getItem('Token');
    const saveDocument = async (updatedDocument: DocumentInterface) => {
        if (localAT === null) return;
        // if (accessToken === null) return;

        setSaving(true);
        try {
            await DocumentService.update(localAT, updatedDocument);
            // await DocumentService.update(accessToken, updatedDocument);
            setDocument(updatedDocument);
        } catch (error) {
            console.log(error)
        } finally {
            setSaving(false);
        }
    }
    return (
        <DocumentContext.Provider
            value={{
                document,
                setDocument,
                setDocumentTitle,
                saving,
                setSaving,
                saveDocument,
                shareDocWindow,
                setShareDocWindow,
                currentUsers,
                setCurrentUsers
            }}
        >
            {children}
        </DocumentContext.Provider>
    )
}
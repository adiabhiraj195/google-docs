import { createContext, useState, Dispatch, SetStateAction } from "react";
import DocumentInterface from "../types/interface/document-interface";

interface DocumentContextInterface {
    document: DocumentInterface | null;
    setDocument: Dispatch<SetStateAction<DocumentInterface | null>>;
    setDocumentTitle: (title: string) => void;
    saving: boolean;
    setSaving: Dispatch<SetStateAction<boolean>>;
}

const defaultValues = {
    document: null,
    setDocument: ()=>{},
    setDocumentTitle: ()=>{},
    saving: false,
    setSaving: ()=>{},
}

export const DocumentContext = createContext<DocumentContextInterface>(defaultValues);

interface DocumentProviderInterface {
    children: JSX.Element;
}

export const DocumentProvider = ({children}: DocumentProviderInterface)=>{
    const [document, setDocument] = useState<DocumentInterface | null>(defaultValues.document);
    const [saving, setSaving] = useState<boolean>(defaultValues.saving);

    const setDocumentTitle = (title: string)=>{
        setDocument({...document, title} as DocumentInterface);
    }
    return (
        <DocumentContext.Provider
            value={{
                document,
                setDocument,
                setDocumentTitle,
                saving,
                setSaving,
            }}
        >
            {children}
        </DocumentContext.Provider>
    )
}
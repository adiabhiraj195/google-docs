import useAuth from "./useAuth";
import { useState, useEffect } from 'react';
import DocumentInterface from "../types/interface/document-interface";
import DocumentService from "../service/document-service";

const useDocument = (documentId: number) => {
    const { accessToken } = useAuth();
    const localAT = localStorage.getItem('Token');
    const [loading, setLoading] = useState(false);
    const [document, setDocument] = useState<DocumentInterface | null>(null);
    // console.log(document , "useDocument");
    const loadDocument = async (accessToken: string, documentId: number) => {
        if (accessToken === null) return;
        setLoading(true);

        try {
            const response = await DocumentService.getDocumnet(accessToken, documentId);
            setDocument(response.data as DocumentInterface);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // if (accessToken == null) return
        if (localAT == null) return

        // loadDocument(accessToken, documentId)
        loadDocument(localAT, documentId)
    }, [accessToken, documentId]);

    return{
        document,
        loading
    }
}
export default useDocument;
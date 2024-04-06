import useAuth from "./useAuth";
import { useState, useEffect } from 'react';
import DocumentInterface from "../types/interface/document-interface";
import DocumentService from "../service/document-service";
import useToast from "./useToast";
import axios from "axios";

const useDocument = (documentId: number) => {
    const { accessToken } = useAuth();
    const localAT = localStorage.getItem('Token');
    const [loading, setLoading] = useState(false);
    const [document, setDocument] = useState<DocumentInterface | null>(null);
    const { toastError } = useToast();

    // console.log(document , "useDocument");
    const loadDocument = async (accessToken: string, documentId: number) => {
        if (accessToken === null) return;
        setLoading(true);

        try {
            const response = await DocumentService.getDocument(accessToken, documentId);
            // console.log(response, "document")
            setDocument(response.data as DocumentInterface);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const { response } = error;
                if (response?.status === 404) {
                    toastError("Document doesn't exist.");
                } else {
                    toastError("An unknown error has occured. Please try again.");
                }
            } else {
                toastError("An unknown error has occured. Please try again.");
            }
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

    return {
        document,
        loading
    }
}
export default useDocument;
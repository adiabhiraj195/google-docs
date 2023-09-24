import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import DocumentInterface from '../types/interface/document-interface';
import DocumentService from '../service/document-service';

const useDocuments = () => {
    const [loading, setLoading] = useState(false);
    const [documents, setDocuments] = useState<Array<DocumentInterface>>([]);
    const { accessToken } = useAuth();
    const localAT = localStorage.getItem('Token');

    const loadDocuments = async () => {

        // if (accessToken === null) return;
        if (localAT === null) return;
        try {
            setLoading(true);
            // const response = await DocumentService.documentList(accessToken);
            const response = await DocumentService.documentList(localAT);
            setDocuments(response.data as Array<DocumentInterface>);
            // console.log(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadDocuments();
    }, [accessToken]);

    return {
        loading,
        setLoading,
        documents,
        setDocuments
    }
}

export default useDocuments;
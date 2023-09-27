import DocumentInterface from "../types/interface/document-interface";
import API from "./api";

const DocumentService = {
    create: (accessToken: string) => {
        return API.post('/document', {}, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    },
    documentList: (accessToken: string) => {
        return API.get('/document', {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    },
    update: (accessToken: string, payload: DocumentInterface) => {
        return API.put(`/document/${payload.id}`, payload, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    },
    getDocument: (accessToken: string, documentId: number) => {
        return API.get(`/document/${documentId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    },
    deleteDoc: (accessToken: string, documentId: number)=>{
        return API.delete(`/document/${documentId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
    },
    addDocument: (accessToken: string, payload: {
        title: string,
        content: string
    }) => {
        return API.post('/document/safa', payload, {
            headers: { Authorization: `Bearer ${accessToken}` },

        })
    }
}

export default DocumentService;
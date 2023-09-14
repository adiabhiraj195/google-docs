import API from "./api";

const DocumentService = {
    addDocument: (accessToken: string, payload: {
        title: string,
        content: string
    }) => {
        return API.post('/document', payload, {
            headers: { Authorization: `Bearer ${accessToken}` },

        })
    }
}

export default DocumentService;
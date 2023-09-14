import API from "./api";

const DocumentService = {
    create : (accessToken: string)=>{
        return API.post('/document', {}, {
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
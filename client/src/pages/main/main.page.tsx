import React, { useState } from 'react'
import TextField from '../../components/atom/text-field/text-field';
import DocumentService from '../../service/document-service';

const MainPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const accessToken = localStorage.getItem('Token');

    const addDocument = async()=>{
        if(accessToken === null) return;
        try {
            const response = await DocumentService.addDocument(accessToken, {title, content})
        } catch (error) {
            console.log(error);
        }
    }

    const hanldeTitle = (value: string)=>{
        setTitle(value);
    }
    return (
        <div>
            <h1>main page</h1>
            <TextField
                type='text'
                value={title}
                onInput={hanldeTitle}
                placeholder='TITLE'
            />
            <textarea
                value={content}
                onInput={(e)=>setContent((e.target as HTMLTextAreaElement).value)}
            />
            <button onClick={addDocument}>add document</button>
        </div>
    )
}

export default MainPage;
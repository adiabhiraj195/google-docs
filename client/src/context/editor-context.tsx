import {
    useState,
    createContext,
    SetStateAction,
    Dispatch,
    useRef,
    MutableRefObject,
    useContext,
    useEffect
} from 'react';
import {
    Editor,
    EditorState,
    convertToRaw,
    convertFromRaw,
    RawDraftContentState
} from 'draft-js';
import { DocumentContext } from './document-context';
import DocumentInterface from '../types/interface/document-interface';

interface EditorContextInterface {
    editorState: EditorState;
    setEditorState: Dispatch<SetStateAction<EditorState>>;
    handleEditorChange: (editorState: EditorState) => void;
    editorRef: null | MutableRefObject<null | Editor>;
    focusEditor: () => void;
}

const defaultValue = {
    editorState: EditorState.createEmpty(),
    setEditorState: () => { },
    handleEditorChange: () => { },
    editorRef: null,
    focusEditor: () => { }
}

export const EditorContext = createContext<EditorContextInterface>(defaultValue);

interface EditorProviderInterface {
    children: JSX.Element;
}

const DEFAULT_SAVE_TIME = 1500;
let saveInterval: null | NodeJS.Timer = null;

export const EditorProvider = ({ children }: EditorProviderInterface) => {
    const [editorState, setEditorState] = useState(defaultValue.editorState);
    const editorRef = useRef<null | Editor>(defaultValue.editorRef);

    const { document, setDocument, saveDocument, setSaving } = useContext(DocumentContext);

    const handleEditorChange = (editorState: EditorState) => {
        setEditorState(editorState);

        const content = convertToRaw(editorState.getCurrentContent());
        const updatedDocument = {
            ...document,
            content: JSON.stringify(content)
        } as DocumentInterface;
        setDocument(updatedDocument);

        if (document === null || JSON.stringify(content) === document.content) return;

        if (saveInterval !== null) {
            clearInterval(saveInterval);
        }
        saveInterval = setInterval(async () => {
            await saveDocument(updatedDocument);
            if (saveInterval) clearInterval(saveInterval);
        }, DEFAULT_SAVE_TIME);
    }

    const focusEditor = () => {
        if (editorRef === null || editorRef.current === null) return;
        editorRef.current.focus();
    }

    useEffect(()=>{
        if(document === null || document.content ===null) return;

        try {
            const contentState = convertFromRaw(JSON.parse(document.content) as RawDraftContentState);
            const newEditorState = EditorState.createWithContent(contentState);
            setEditorState(newEditorState);
        } catch (error) {
            console.log(error);
        }
    }, [document])

    return (
        <EditorContext.Provider
            value={{
                editorState,
                setEditorState,
                handleEditorChange,
                editorRef,
                focusEditor
            }}
        >
            {children}
        </EditorContext.Provider>
    )
}
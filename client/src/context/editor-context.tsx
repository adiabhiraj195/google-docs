import {
    useState,
    createContext,
    SetStateAction,
    Dispatch,
    useRef,
    MutableRefObject
} from 'react';
import {
    Editor,
    EditorState,
    convertToRaw
} from 'draft-js';

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

export const EditorProvider = ({ children }: EditorProviderInterface) => {
    const [editorState, setEditorState] = useState(defaultValue.editorState);
    const editorRef = useRef<null | Editor>(defaultValue.editorRef);

    const handleEditorChange = (editorState: EditorState) => {
        setEditorState(editorState);
        console.log(convertToRaw(editorState.getCurrentContent()));
    }

    const focusEditor = () => {
        if (editorRef === null || editorRef.current === null) return;
        editorRef.current.focus();
    }

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
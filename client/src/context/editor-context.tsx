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
import { DocumentContext } from './document-context';
import DocumentInterface from '../types/interface/document-interface';
import { io } from 'socket.io-client';
// import useAuth from '../hooks/useAuth';
import { BASE_URL } from '../service/api';
import SocketEvents from '../types/enums/SocketEvents-enum';

interface EditorContextInterface {
    editorState: string;
    setEditorState: Dispatch<SetStateAction<string>>;
    handleEditorChange: (editorState: string) => void;
    editorRef: null | MutableRefObject<null>;
    focusEditor: () => void;
    socket: MutableRefObject<any> | null
}

const defaultValue = {
    editorState: "",
    setEditorState: () => { },
    handleEditorChange: () => { },
    editorRef: null,
    focusEditor: () => { },
    socket: null
}

export const EditorContext = createContext<EditorContextInterface>(defaultValue);

interface EditorProviderInterface {
    children: JSX.Element;
}

const DEFAULT_SAVE_TIME = 1500;
let saveInterval: null | NodeJS.Timer = null;

export const EditorProvider = ({ children }: EditorProviderInterface) => {
    const [editorState, setEditorState] = useState(defaultValue.editorState);
    const editorRef = useRef<any>(defaultValue.editorRef);
    const socket = useRef<any>(defaultValue.socket);
    const { document, setDocument, saveDocument, setSaving, setCurrentUsers } = useContext(DocumentContext);
    // const { accessToken } = useAuth();
    const accessToken = localStorage.getItem('Token');

    const handleEditorChange = (newEditorState: string) => {
        setEditorState(newEditorState);

        socket.current.emit(SocketEvents.SEND_CHANGES, newEditorState);

        const updatedDocument = {
            ...document,
            content: newEditorState
        } as DocumentInterface;
        setDocument(updatedDocument);

        if (document === null || newEditorState === document.content) return;  ////   **************  ////

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


    //Update document state
    useEffect(() => {
        if (document === null || document.content === null) return;

        try {
            const newEditorState = document.content;

            setEditorState(newEditorState);
        } catch (error) {
            console.log(error);
        }
    }, [document]);

    //Socket connection
    useEffect(() => {
        if (
            document === null ||
            accessToken === null ||
            socket === null ||
            (socket.current !== null && socket.current.connected)
        )
            return;

        socket.current = io(BASE_URL, {
            query: { documentId: document.id, accessToken },
        }).connect();

    }, [document, accessToken, socket]);

    //Disconnect Socket
    useEffect(() => {
        if (socket.current === null) return;
        // may be return a function
        return () => socket.current.disconnect();
    }, []);

    //Recieve changes
    useEffect(() => {
        if (socket.current === null) return;

        const receiveHandler = (newEditorState: string) => {
            setEditorState(newEditorState);
        }

        socket.current.on(SocketEvents.RECEIVE_CHANGES, receiveHandler);

        return () => {
            socket.current.off(SocketEvents.RECEIVE_CHANGES, receiveHandler);
        }
    }, [socket.current]);

    //Update current users 
    useEffect(() => {

        if (socket.current === null) return;

        const usersHandler = (currentUsers: Array<string>) => {
            setCurrentUsers(new Set<string>(currentUsers));
        };

        socket.current.on(SocketEvents.CURRENT_USERS_UPDATE, usersHandler);

        return () => {
            socket.current.off(SocketEvents.CURRENT_USERS_UPDATE, usersHandler);
        }
    }, [socket.current]);

    return (
        <EditorContext.Provider
            value={{
                editorState,
                setEditorState,
                handleEditorChange,
                editorRef,
                focusEditor,
                socket
            }}
        >
            {children}
        </EditorContext.Provider>
    )
}
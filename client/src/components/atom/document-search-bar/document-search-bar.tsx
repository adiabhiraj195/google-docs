import './document-search-bar.css';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const DocumentSearchbar = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`${isFocused ? 'search-bar-focus' : 'search-bar-unfocus'
                } document-search-container`}
        >
            <div className="search-icon">
                <AiOutlineSearch className="search-icon" />
            </div>
            <input
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)}
                type="text"
                className={`${isFocused ? 'search-input-focus' : 'search-input-unfocus'
                    } search-input`}
                placeholder="Search"
                name=""
                id=""
            />
        </div>
    );
};

export default DocumentSearchbar;

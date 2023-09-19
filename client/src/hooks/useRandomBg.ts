import { useState, useEffect } from 'react';

const colors = [
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
];

const useRandomBg = () => {
    const [randomBg, setRandomBg] = useState<string>('');
    useEffect(() => {
        setRandomBg(colors[Math.floor(Math.random() * colors.length)]);
    },[]);

    return {
        randomBg
    }
}

export default useRandomBg;
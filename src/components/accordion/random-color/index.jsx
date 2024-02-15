import { useEffect, useState } from "react"


export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function getRandomNumber(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColour() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRandomRgbColour() {
        const r = getRandomNumber(256);
        const g = getRandomNumber(256);
        const b = getRandomNumber(256);
        const rgb = `rgb(${r}, ${g}, ${b})`
        setColor(rgb);
    }

    // called every time typeOfColor is changed
    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColour()
        else handleCreateRandomHexColour()
    }, [typeOfColor]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? () => handleCreateRandomHexColour() : () => handleCreateRandomRgbColour()}>Generate Random Color</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFF',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <h3>{ typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color' }</h3>
                <h1>{ color}</h1>
            </div>
        </div>
    )
}
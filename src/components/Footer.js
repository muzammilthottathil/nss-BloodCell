import React from 'react';

export default function Footer() {
    const divStyle = {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#494d57'
    };

    const pStyle = {
        fontFamily: "'Roboto', sans-serif",
        fontSize: 'calc(0.65rem + 0.1vw)',
        color: '#fff',
        padding: '3px 5px'
    };

    return (
        <div style={divStyle}>
            <p style={pStyle}>NSS Blood Cell</p>
            <p style={pStyle}>College of Engineering Trivandram</p>
        </div>
    );
}

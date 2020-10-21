import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }) => {
    return (
        <SyntaxHighlighter language="javascript" style={materialDark} showLineNumbers="true">
            {code}
        </SyntaxHighlighter>
    );
};
export default CodeBlock;

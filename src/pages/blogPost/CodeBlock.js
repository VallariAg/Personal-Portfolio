import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { materialDark, a11yDark, prism, twilight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} showLineNumbers="true">
            {code}
        </SyntaxHighlighter>
    );
};
export default CodeBlock;

// style={twilight}

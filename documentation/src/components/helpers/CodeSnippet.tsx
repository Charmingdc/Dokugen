import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeSnippetProps = {
  code: string;
  lang: string;
};

const CodeSnippet = ({ code, lang }: CodeSnippetProps) => {
  return (
    <SyntaxHighlighter language={lang} style={oneDark} className="code-snippet">
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
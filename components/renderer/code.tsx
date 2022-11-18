export const Code = ({ block }) => {
  const language = block.parsed.className ? block.parsed.className : 'language-javascript';

  return (
    <pre className={`wp-block-code ${language}`}>
      <code
        className={language}
        dangerouslySetInnerHTML={{ __html: block.parsed.content }}
      ></code>
    </pre>
  );
};

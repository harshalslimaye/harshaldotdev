export const Paragraph = ({ block }) => (
  <p dangerouslySetInnerHTML={{ __html: block.parsed.content }}></p>
);

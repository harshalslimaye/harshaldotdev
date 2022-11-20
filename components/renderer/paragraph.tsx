import { useRouter } from 'next/router';

export const Paragraph = ({ block }) => {
  const router = useRouter();

  return (
    <p
      onClick={(e: any) => {
        if (e.target.tagName !== 'A') {
          return;
        }
        e.preventDefault();
        const href = e.target.href;

        href.indexOf('harshal.dev') !== -1
          ? router.push(href.split('harshal.dev')[1])
          : window.open(href, '_blank');
      }}
      dangerouslySetInnerHTML={{ __html: block.parsed.content }}
    ></p>
  );
};

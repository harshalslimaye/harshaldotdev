import axios from 'axios';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const endpoint = `${process.env.IMAGE_DOMAIN}${process.env.ENDPOINT}`;

  const { data }: any = await axios.get(endpoint);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data
      .map((post) => {
        return `<sitemap>
            <loc>https://harshal.dev/${post.slug}</loc>
            <lastmod>${new Date(post.date).toISOString()}</lastmod>
          </sitemap>`;
      })
      .join('')}
    </sitemapindex>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

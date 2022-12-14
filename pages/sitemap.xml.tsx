import axios from 'axios';
import moment from 'moment';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  `;
  const postEndpoint = `http://${process.env.IMAGE_DOMAIN}/${process.env.POSTS_ENDPOINT}`;
  const catEndpoint = `http://${process.env.IMAGE_DOMAIN}/${process.env.CAT_ENDPOINT}`;
  const posts: any = await axios.get(postEndpoint);
  const categories: any = await axios.get(catEndpoint);

  sitemap += `${posts.data
      .map((post) => {
        return `<url>
            <loc>https://harshal.dev/${post.slug}</loc>
            <lastmod>${
              moment(post.modified).format('YYYY-MM-DD')
            }</lastmod>
          </url>`;
      })
      .join('')}`;

  sitemap += `</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

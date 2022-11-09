import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Post from '../../components/post';
import { getAllCategories, getPostsByCategory } from '../../lib/api';

const getTitle = (key: string): string => {
  const map = {
    "angular": "Angular",
    "javascript": "JavaScript",
    "chrome-extensions": "Chrome Extensions",
    "gatsby-js": "Gatsby.js"
  };
  console.log(key);
  return map[key];
}

const Category = ({ posts }) => {
  const router = useRouter();
  const category = router.query.category ? `${router.query.category}` : '';
  const title = getTitle(category);

  return (
    <Layout title={title}>
      <h2 className="mt-5">Category: {title}</h2>
      <div className="mt-9">
        {posts &&
          posts.nodes &&
          posts.nodes.map((node, i) => (
            <Post
              key={`${node.slug}`}
              title={node.title}
              date={node.date}
              excerpt={node.excerpt}
              slug={node.slug}
              categories={node.categories}
              readtime={node.readtime}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Category;

export const getStaticProps: GetStaticProps = async ({
  params: { category },
}) => {
  const data = await getPostsByCategory({ category });
  return {
    props: {
      posts: data || [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories();

  return {
    paths:
      categories && categories.nodes
        ? categories.nodes.map(({ slug }) => `/category/${slug}`)
        : [],
    fallback: true,
  };
};

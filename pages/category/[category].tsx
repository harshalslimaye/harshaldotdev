import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/layout';
import Post from '../../components/post';
import { getAllCategories, getPostsByCategory } from '../../lib/api';

const Category = ({ posts }) => {
  return (
    <Layout title={'Page'}>
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

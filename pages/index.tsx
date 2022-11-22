import { GetStaticProps } from 'next';
import { getPageCount, getPaginatedPosts } from '../lib/api';
import { POSTS_PER_PAGE } from '../lib/utils';

import Layout from '../components/layout/layout';
import Pagination from '../components/pagination';
import Post from '../components/post';


const Index = ({ posts, pageCount }) => {
  return (
    <Layout title={'Home'} description="JavaScript Enthusiast | Software Developer | Open Source Contributor |
    Technical Speaker">
      <div className="mt-9">
        {posts.nodes &&
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
      <Pagination currentPage={1} pageCount={pageCount} />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPaginatedPosts({
    size: POSTS_PER_PAGE,
    offset: 0,
  });
  const total = await getPageCount();
  const pageCount = Math.ceil(total / POSTS_PER_PAGE);

  return {
    props: { posts, pageCount },
  };
};

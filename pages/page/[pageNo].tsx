import React from 'react';
import Layout from '../../components/layout/layout';
import Pagination from '../../components/pagination';
import Post from '../../components/post';
import { getPageCount, getPaginatedPosts } from '../../lib/api';
import { getPageOffset, POSTS_PER_PAGE } from '../../lib/utils';

const Page = (props) => {
  const { posts, currentPage, pageCount } = props;

  return (
    <Layout title={'Home'} description={'Home'}>
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
      <Pagination currentPage={currentPage} pageCount={pageCount} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const { pageNo } = params || {};
  const offset = getPageOffset(pageNo);

  const variables = {
    size: POSTS_PER_PAGE,
    offset,
  };

  const posts = await getPaginatedPosts(variables);
  const total = await getPageCount();
  const pageCount = Math.ceil(total / POSTS_PER_PAGE);

  return {
    props: {
      posts,
      currentPage: +pageNo,
      pageCount,
    },
    revalidate: 1,
  };
}

export const getStaticPaths = async () => {
  const totalPostsCount = await getPageCount();
  const pagesCount = Math.ceil(totalPostsCount / POSTS_PER_PAGE);
  const paths = Array.from(new Array(pagesCount))
    .fill('')
    .map((_, index) => ({
      params: {
        pageNo: (index + 1).toString(),
      },
    }));

  return {
    paths: [...paths],
    fallback: false,
  };
};

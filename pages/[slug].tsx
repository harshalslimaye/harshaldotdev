import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import UtterancesComments from '../components/comments';
import Layout from '../components/layout';
import PostInfo from '../components/post-info';
import { BaseProps } from '../interfaces/props';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/api';

interface PostProps extends BaseProps {
  post: any;
  posts: any[];
}

const Post: React.FC<PostProps> = ({ post, posts }) => {
  return (
    post && (
      <Layout title={`${post.title}`}>
        <div className="my-5">
          <h1>{`${post.title}`}</h1>
          <PostInfo
            date={post.date}
            categories={post.categories}
            readtime={post.readtime}
          />
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
        <UtterancesComments />
      </Layout>
    )
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  };
};

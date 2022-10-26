import React from 'react';
import Link from 'next/link';
import { BaseProps } from '../interfaces/props';
import PostInfo from './post-info';

interface Category {
  name: String;
  slug: String;
}

interface PostProps extends BaseProps {
  title: String;
  excerpt: String;
  date: String;
  slug: String;
  readtime: String;
  categories: {
    nodes: Category[];
  };
}

const Post: React.FC<PostProps> = (props) => {
  const { title, date, excerpt, slug, categories, readtime } = props;
  const readmore = excerpt.length > 150 ? '...' : '';

  return (
    <div className="my-8">
      <h2>
        <Link href={`${slug}`}>{title}</Link>
      </h2>
      <PostInfo date={date} categories={categories} readtime={readtime} />
      <div
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: `${excerpt.slice(0, 160)}${readmore}` }}
      ></div>
    </div>
  );
};

export default Post;

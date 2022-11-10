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
  const readmore = excerpt.length > 250 ? '...' : '';

  return (
    <div className="post-block">
      <h2>
        <Link href={`/${slug}`}>{title}</Link>
      </h2>
      <PostInfo date={date} categories={categories} readtime={readtime} />
      <div
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: `${excerpt.slice(0, 250)}${readmore}` }}
      ></div>
      <p>
        <Link href={`/${slug}`}>
          <a className="read-more">Read more <span className="hidden">&#8594;</span></a>
        </Link>
      </p>
    </div>
  );
};

export default Post;

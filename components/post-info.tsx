import Link from 'next/link';
import React from 'react';

interface Category {
  name: String;
  slug: String;
}

interface PostInfo {
  date: String;
  readtime: String;
  categories: {
    nodes: Category[];
  };
}

const PostInfo: React.FC<PostInfo> = ({ date, categories, readtime }) => {
  return (
    <div className="my-1">
      {new Date(`${date}`).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
      <span className="mx-2">&bull;</span>
      {categories.nodes &&
        categories.nodes.map((node, i) => (
          <span key={`${node.slug}`}>
            <Link href={`category/${node.slug}`}>{node.name}</Link>
          </span>
        ))}
      <span className="mx-2">&bull;</span>
      {readtime} min read
    </div>
  );
};

export default PostInfo;

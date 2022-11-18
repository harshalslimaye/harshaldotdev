import React from 'react';
import { Code } from './code';
import { Heading } from './heading';
import { Media } from './media';
import { Paragraph } from './paragraph';

export const Renderer: React.FC<any> = ({ blocks }) => {
  const types = ['core/paragraph', 'core/image', 'core/code', 'core/heading'];

  return (
    <>
      {blocks
        .filter((block) => types.indexOf(block.name) !== -1)
        .sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          }
          if (a.order < b.order) {
            return -1;
          }
          return 0;
        })
        .map((block) => ({
          ...block,
          parsed: JSON.parse(block.attributesJSON),
        }))
        .map((block) => {
          console.log(block.order);
          switch (block.name) {
            case 'core/paragraph':
              return <Paragraph key={block.order} block={block} />;

            case 'core/image':
              return <Media key={block.order} block={block} />;

            case 'core/code':
              return <Code key={block.order} block={block} />;

            case 'core/heading':
              return <Heading key={block.order} block={block} />;
          }
        })}
    </>
  );
};

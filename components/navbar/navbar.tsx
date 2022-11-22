import Link from 'next/link';

const Navbar = () => {
  const categories = [
    { name: 'Angular', slug: 'angular' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'Gatsby.js', slug: 'gatsby-js' },
    { name: 'Chrome-Extensions', slug: 'chrome-extensions' },
    { name: 'Rust', slug: 'rust' },
    { name: 'vscode', slug: 'vscode' },
  ];

  return (
    <>
      <ul className="hashtags">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/category/${c.slug}`}>
              <a className="hashtag">#{c.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;

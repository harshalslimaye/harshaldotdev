import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const categories = [
    { name: 'Angular', slug: 'angular' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'Gatsby.js', slug: 'gatsby-js' },
    { name: 'Chrome-Extensions', slug: 'chrome-extensions' }
  ];

  return (
    <>
      <div className="searchbox mt-5">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          autoComplete={'off'}
        />
        <Image src={'/images/search.svg'} width={24} height={24} />
      </div>
      <ul className="flex mt-5">
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

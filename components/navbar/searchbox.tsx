import Image from "next/image";

export const Searchbox = () => {
  return (
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
  );
};

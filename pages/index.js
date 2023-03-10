import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { useState } from "react";

export default function Home({ posts }) {
  const [posted] = useState(posts.slice(0, 5000));

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(20);

  const [PageNumberLimit] = useState(8);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(8);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(posted.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posted.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrev = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % PageNumberLimit == 0) {
      setminPageNumberLimit(maxPageNumberLimit - PageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - PageNumberLimit);
    }
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setminPageNumberLimit(maxPageNumberLimit + PageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + PageNumberLimit);
    }
  };

  let PageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    PageIncrementBtn = <li onClick={handleNext}>...</li>;
  }

  let PageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    PageDecrementBtn = <li onClick={handlePrev}>...</li>;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="justify-center">
      <FeaturedPosts />
      {/* <div className=" mb-1  flex text-center justify-center transition duration-500 ease transform hover:-translate-y-1 flex-col px-10 items-center lg:items-center cursor-pointer">
        <h1 className="font-large text-xl ">SMUG FM</h1>
        <p className="font-small text-sm">The center of influence</p>
      </div>
      <div className=" flex text-center justify-center my-4">
        <iframe
          src="https://zeno.fm/player/sdamissionug-gospello-online-radio"
          width="768"
          height="300"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div> */}
      <a className="py-4 mb-2 w-full justify-center flex" href="https://yllix.com/publishers/398782" target="_blank">
        <img
          src="//ylx-aff.advertica-cdn.com/pub_vs2thi.png"
          width="728"
          height="90"
          border="0"
          alt="yX Media - Monetize your website traffic with us"
          title="yX Media - Monetize your website traffic with us"
        />
      </a>
      <div className="grid grid-cols-3 gap-4 mx-3">
        <div className="col-span-3 md:col-span-2">
          <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
        <div className="mb-4 md:mb-0 md:col-span-1 col-span-3 ">
          <div className="md:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
        <div
          onClick={scrollToTop}
          className="ml-48 flex list-none gap-8 text-2xl font-semibold md:sticky cursor-pointer text-blue-500 hover:text-pink-500 justify-center md:left-72"
        >
          {PageDecrementBtn}
          {renderPageNumbers}
          {PageIncrementBtn}
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

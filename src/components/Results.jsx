import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultsContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { searchTerm, getResults, isLoading, items } = useResultContext();
  const location = useLocation(); // returns the current url (i.e search, videos and images)

  useEffect(() => {
    getResults("/search?query=Javascripy Mastery&num=20");
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {items?.items?.map(({ link, title, snippet }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover-underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm">
                  {snippet.length > 100 ? snippet.substring(0, 100) : snippet}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/news":
      return "NEWS";

    case "/images":
      return "IMAGES";

    case "/videos":
      return "VIDEOS";

    default:
      return "ERROR!";
  }
};

export default Results;

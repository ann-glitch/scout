import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Flowers");

  //search, //videos, //images
  const getResults = async (url) => {
    setIsLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_APIKEY,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });

    const data = await res.json();
    console.log(data);
    setItems(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, items, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);

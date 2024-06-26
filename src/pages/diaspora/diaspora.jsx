import React, { useEffect, useState } from "react";
import "./diaspora.scss";
import { LastNews } from "../../components/categoryPage/lastNews";
import { NewsGrid } from "../../components/newsGrid/newsGrid";
// SanityServices
import { FetchNews } from "../../services/sanityService";
export const Diaspora = () => {
  const [infoContinuArticles, setInfoContinuArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportArticles = await FetchNews("diaspora");
        setInfoContinuArticles(sportArticles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        <LastNews data={infoContinuArticles}></LastNews>
      </div>
      <NewsGrid
        title="Diaspora-News"
        data={infoContinuArticles.slice(5)}></NewsGrid>
    </>
  );
};

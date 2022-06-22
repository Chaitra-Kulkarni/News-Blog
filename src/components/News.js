import axios from "axios";
import { useState } from "react";

const News = () => {
  const [fetchedNews, setFetchedNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=5804eeaec0504c818cc3508707b6cbb2"
      )
      .then((response) => {
        setFetchedNews(response.data.articles);
        // console.log(response)
      });
  };

  return (
    <>
      <button className="btn btn-info" onClick={fetchNews}>
        Fetch News
      </button>
      <div className="container border border-info">
        <div className="row">
            {
                fetchedNews.map(value => {
                    return (
                        <div className="col border border-secondary m-2">
                <img src={value.urlToImage} alt="news-image" style={{width: "20rem"}} className="border border-dark" />
                <h5 className="m-1 mark text-dark">{value.title}</h5>
                <p>{value.description}</p>
                <a href="#" className="btn btn-info m-3">Click Here!</a>
            </div>
                    )
                }
                )
            }
        </div>
      </div>
    </>
  );
};

export default News;

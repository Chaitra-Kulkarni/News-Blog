import axios from "axios";
import { useState } from "react";

const News = () => {
  const [fetchedNews, setFetchedNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=5804eeaec0504c818cc3508707b6cbb2"
      )
      .then((response) => {
        setFetchedNews(response.data.articles);
        // console.log(response)
      });
  };

  return (
    <>
      <button className="btn btn-info m-2" onClick={fetchNews}>
        India News
      </button>
      <button className="btn btn-info m-2" onClick={fetchNews}>
        US News
      </button>
      <button className="btn btn-info m-2" onClick={fetchNews}>
        Canada News
      </button>
      <button className="btn btn-info m-2" onClick={fetchNews}>
        Australia News
      </button>
      <div className="container border border-info">
        <div className="row">
            {
                fetchedNews.map(value => {
                    return (
                        <div className="col border border-secondary m-2">
                <img src={value.urlToImage} alt="news-image" style={{width: "20rem"}} className="border border-dark mt-2" />
                <h5 className="m-1 mark text-dark">{value.title}</h5>
                <p>{value.description}</p>
                <a href={value.url} className="btn btn-info m-3">Click Here!</a>
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

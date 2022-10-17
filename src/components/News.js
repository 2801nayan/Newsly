import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  const updateNews = async () => {
    props.setProgress(20);
    setPage(page+1)
    const dataURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.APIKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(dataURL);
    props.setProgress(50);
    let parseData = await data.json();
    props.setProgress(70);
    setArticle(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  
  useEffect(() => {
    document.title = `Newsly - ${ props.category}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const dataURL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&APIKey=${props.APIKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(dataURL);
    let parseData = await data.json();
    setArticle(article.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
  };
  return (
    <>
      <h1 className="text-center" style={{ margin: "80px 0px 25px 0px" }}>
        Newsly - {props.category} Headlines
      </h1>
      {console.log("total fetched = "+ totalResult)}
      {console.log("length = " + article.length)}
      { loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
      >
        {console.log()}
        <div className="container">
          <div className="row">
            {article.map((element, url) => {
              return (
                <div
                  className="overflow-hidden col-md-4 responsive"
                  style={{ height: "550px" }}
                  key={url}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 50) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : "click on read more for more info"
                    }
                    imgURL={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    publishedOn={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 0,
      totalResult: 0,
      remainingResults: 0
    };
    document.title = `Newsly - ${this.props.category}`;
  }
  async updateNews() {
    this.props.setProgress(20);
    const dataURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.APIKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(dataURL);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      article: parseData.articles,
      totalResult: parseData.totalResults,
      page: this.state.page+1,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    const dataURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&APIKey=${this.props.APIKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(dataURL);
    let parseData = await data.json();
    this.setState({
      article: this.state.article.concat(parseData.articles),
      totalResult: parseData.totalResults,
      page: this.state.page + 1,
      loading: false,
    });
  };
  
  render() {
    return (
      <>
        {console.log("total = " + this.state.totalResult)}
        <h1 className="text-center" style={{ margin: "80px 0px 25px 0px" }}>
          Newsly - Top {this.props.category} Headlines
        </h1>
        {console.log("total fetched = " + this.state.article.length)}
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResult}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element, url) => {
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
  }
}

export default News;

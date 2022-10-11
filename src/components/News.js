import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor () {
        super();
        this.state = {
            article : [],
            loading : false,
            page : 1
        }
    }
    
    async componentDidMount() { 
        let dataURL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e6f6179cfdcd47a085409713b55fa37a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(dataURL);
        let parseData = await data.json();
        this.setState({
            article: parseData.articles, 
            totalResult: parseData.totalResults,
            loading: false
        });
    }

    handlePrevClick = async ()=>{
        let dataUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e6f6179cfdcd47a085409713b55fa37a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(dataUrl);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            article: parseData.articles,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize))) {
            let dataUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e6f6179cfdcd47a085409713b55fa37a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(dataUrl);
            let parseData = await data.json();
            this.setState({
                loading: false,
                page : this.state.page + 1,
                article: parseData.articles
            }) 
        }
    }

    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center' style={{marginTop: "80px"}}>Newsly - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-4">
                    {
                        !this.state.loading && this.state.article.map((element)=>{
                        return <div className="overflow-hidden col-md-4 responsive" style={{height: "600px"}} key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0,50) : ""}
                                description={element.description ? element.description.slice(0,90) : "click on read more for more info"}
                                imgURL={element.urlToImage}
                                url={element.url} 
                                author={element.author}
                                publishedOn={element.publishedAt}
                                source={element.source.name}/>
                        </div>
                        }
                    )}
                </div>
                <div className="container d-flex justify-content-center">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" className="btn btn-dark mx-4" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;
 
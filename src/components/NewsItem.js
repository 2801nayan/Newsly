import React, {Component } from 'react';

export class NewsItem extends Component{

    render() {
        let {title,description,imgURL,url} = this.props;
        return(
            <div>
                <div className="card" style={{width:"20rem"}}>
                    <img src={!imgURL ? "https://www.google.com/search?q=news+images&tbm=isch&ved=2ahUKEwicx5vh2ND6AhWyk9gFHXwgCawQ2-cCegQIABAA&oq=news+images&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAELEDEEM6BAgAEEM6CwgAEIAEELEDEIMBOgQIABADOggIABCxAxCDAToKCAAQsQMQgwEQQ1CXEVjLJWCuJmgCcAB4AIABwAGIAfEMkgEEMC4xM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=CnVBY5yaHLKn4t4P_MCk4Ao&bih=794&biw=1474&rlz=1C1RXQR_enIN1022IN1022#imgrc=Aiviqa14cV09pM" : imgURL} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
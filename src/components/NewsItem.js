import React from "react";

const NewsItem = (props) => {
  let { title, description, imgURL, url, author, publishedOn, source } = props;
  return (
    <div className="outSide-card">
      <div className="card">
        <img
          style={{ height: "250px" }}
          src={
            !imgURL
              ? "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1024-512.png"
              : imgURL
          }
          className="card-img-top overflow-hidden"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Anonymous" : author} on{" "}
              {new Date(publishedOn).toGMTString()} <br /> News Source :{" "}
              {source}{" "}
            </small>
          </p>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

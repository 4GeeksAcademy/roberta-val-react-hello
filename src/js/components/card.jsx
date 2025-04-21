import React from "react";

const Card = ({ title, text, imageUrl, buttonUrl, buttonLabel }) => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 d-flex">
            <div className="card mb-4 flex-fill">
                <img src={imageUrl} className="card-img-top" alt={title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{text}</p>
                    <a href={buttonUrl} className="btn btn-primary mt-3">{buttonLabel}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;


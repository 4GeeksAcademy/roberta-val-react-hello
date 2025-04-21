import React from "react";

const Jumbotron = () => {
    return (
        <div className="container my-4">
            <div className="p-5 bg-light rounded-3 text-center">
                <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                </p>
                <a href="#" className="btn btn-primary btn-lg mt-3">Call to Action!</a>
            </div>
        </div>
    );
};

export default Jumbotron;


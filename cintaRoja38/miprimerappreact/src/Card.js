import React from 'react';

function Card(props) {
    
    return (
        <div className="card col-4">
            <img src="..." className="card-img-top" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Card;
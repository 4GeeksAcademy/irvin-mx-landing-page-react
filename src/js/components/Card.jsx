import React from "react"

//My component styles
const imageDivStyle = {
    width: "90%",
    height: "40%",
    objectFit: "contain"
}


const Card = (props) => {
    const { cardTitle, cardDescription, cardButtonLabel, cardImageUrl } = props
    return (
        <div className="col-12 h-75 d-flex justify-content-center align-items-center col-md-3 card p-2 mt-2 mb-2 w-lg-25 bg-lg-warning">
            <div style={imageDivStyle} >
                <img src={cardImageUrl} className="card-img-top" alt="some alt text" ></img>
            </div>
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <h5 className="card-title ">{cardTitle}</h5>
                <p className="card-text">{cardDescription}</p>
                <a href="#" className="btn btn-primary w-75">{cardButtonLabel}</a>
            </div>
        </div>
    )
}



export default Card
import React from "react";

//Components
import Card from "./Card"

//My styles
const divContainerStyles ={
    height: "40%"
}

const fontSizeStyle = {
    fontSize:"80px"
}

const Jumbotron = () => {
    return <div className="container-fluid w-75">
    {/* Jumbotron */}
    <div className="container-fluid d-flex justify-content-center flex-column bg-body-secondary p-3 md:p-5" style={divContainerStyles}>
        <h1 className="fw-light display-1 display-md-3" >A warm welcome!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati at asperiores magni quibusdam quas recusandae quo cumque, necessitatibus itaque modi expedita maiores ratione atque repellendus eos doloremque perspiciatis. Ea.</p>
        <button type="button" className="col-8 btn btn-primary text-white fw-semibold col-md-3">Call to action!</button>
    </div>

    {/* Cards */}
    <div className="container-fluid d-flex justify-content-evenly p-0 flex-wrap">
        <Card cardTitle="Card Title1" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."  cardButtonLabel="Go somewhere" cardImageUrl="https://images.unsplash.com/photo-1600456899121-68eda5705257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheXxlbnwwfHwwfHx8MA%3D%3D"/>
        <Card cardTitle="Card Title2" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."  cardButtonLabel="Go somewhere" cardImageUrl="https://images.unsplash.com/photo-1600456899121-68eda5705257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheXxlbnwwfHwwfHx8MA%3D%3D"/>
        <Card cardTitle="Card Title3" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."  cardButtonLabel="Go somewhere" cardImageUrl="https://images.unsplash.com/photo-1600456899121-68eda5705257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheXxlbnwwfHwwfHx8MA%3D%3D"/>
        <Card cardTitle="Card Title4" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."  cardButtonLabel="Go somewhere" cardImageUrl="https://images.unsplash.com/photo-1600456899121-68eda5705257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheXxlbnwwfHwwfHx8MA%3D%3D"/>
    </div>
</div>
}

export default Jumbotron
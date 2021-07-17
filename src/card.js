import React from 'react'
import './card.css';

const Card = (props) => {
    return (
        <>
            <div class="card" style={{width: "20rem",paddingBottom:"30px",margin:"30px",fontFamily:"superCell"}}>
                <img class="card-img-top" src={props.data.iconUrls.medium} alt="Card image cap" />
                <div class="card-body">
                    <h2 class="card-title">{props.data.name}</h2>
                    <h5 className="card-text">
                        Max Level : {props.data.maxLevel}
                    </h5>
                </div>
            </div>
        </>
    )
}

export default Card

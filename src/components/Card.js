import React from "react";

export default function Card(props) {
    return (
        <>
        <div className="card">
            
            <img className="card-img" src={props.item.coverImg}/>
           
            
            <div className="card-details">
                <div className="card-location">
                    <img className="image-location" src="/locationtag.png"/>
                    {props.item.location}
                    View on Google Maps
                    <div className="card-title">
                        {props.item.title}
                    </div>
                </div>
                {props.item.date}
                {props.item.desc}
                
            </div>

            
        </div>
        <hr/>
        </>
    )
}
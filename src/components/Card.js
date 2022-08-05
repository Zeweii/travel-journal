import React from "react";

export default function Card(props) {
    return (
        <>
        <div className="card">
            
            <img className="card-img" src={props.item.coverImg}/>
           
            
            <div className="card-details">
                <div className="card-body">
                    
                    <div className="card-location">
                        <img className="image-location" src="/locationtag.png"/>
                        {props.item.location}
                        <a href={props.item.mapsLink} className="maps-location">View on Google Maps</a>
                    </div>

                    
                    <div className="card-title">
                        {props.item.title}
                    </div>
                </div>

                <div className="card-date">{props.item.date}</div>
                <div className="card-description">{props.item.description}</div>
                
            </div>

            
        </div>
        <hr/>
        </>
    )
}
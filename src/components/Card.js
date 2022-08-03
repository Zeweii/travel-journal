import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-details">
                <div className="card-location">
                    <img/>
                    {props.item.location}
                    View on Google Maps
                    <div className="card-title">
                        {props.item.title}
                    </div>
                </div>
                {props.item.date}
                {props.item.desc}
            </div>

            <div className="card-img">

            </div>
        </div>
    )
}
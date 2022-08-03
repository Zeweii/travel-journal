import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-details">
                <div className="card-location">
                    <div className="card-title">
                        <span>{props.item.title}</span>
                    </div>
                </div>
            </div>

            <div className="card-img">

            </div>
        </div>
    )
}
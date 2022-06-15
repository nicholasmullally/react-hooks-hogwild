import React from "react";
import { HogCard, Image } from "semantic-ui-react"

function HogCard({ name, image, greased, specialty, highestMedal, weight}) {
    return (
        <Card>
            <h1 id="pigName">{name}</h1>
            <img src={image} alt={name} />
            <p id="pigSpecialty">{speciality}</p>
            <p id="isGreased">{greased}</p>
            <p id="pigWeight">{weight}</p>
            <p id="pigMedal">{medal}</p>
        </Card>
    );
}

export default HogCard;
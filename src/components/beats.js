import React from 'react';

export const beats = ({Name, Genre, Intro}) => {
    return (
        <li>
            <strong>{Name}</strong> sings {Genre}. Quick fact: {Intro}.
        </li>
    )
}
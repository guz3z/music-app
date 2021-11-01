import React from 'react';

export const beats = ({name, genre, intro}) => {
    return (
        <li>
            <strong>{name}</strong> sings {genre}. Quick fact: {intro}.
        </li>
    )
}
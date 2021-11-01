import React, { useState } from 'react';
import { beats } from './beats';

const MusicList = [
    { name: "Davido", genre: "Afrobeats", intro: "Song by a popular Nigerian musician" },
    { name: "VybzKartel", genre: "Dancehall", intro: "Legend still releases bangers from jail" },
    { name: "Nailah Blackman", genre: "Soca", intro: "23-year old artist in Trinidad & Tobago" },
    { name: "Kes", genre: "Soca", intro: "Upbeat band, best song is Hello" }
];

export const musicList = () => {
    const renderMusicList = () => MusicList.map((m, i) => <beats key={i} name={m.name} genre={m.genre} intro={m.intro}/>);
    return (
        <section id="beat">
            <h2>Musicians</h2>
            <ol>
                { renderMusicList() }
            </ol>
        </section>

        
    )
}
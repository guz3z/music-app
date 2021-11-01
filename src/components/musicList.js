import React, { useState } from 'react';


const MusicList = [
    { Name: "Davido", Genre: "Afrobeats", Intro: "Song by a popular Nigerian musician" },
    { Name: "VybzKartel", Genre: "Dancehall", Intro: "Legend still releases bangers from jail" },
    { Name: "Nailah Blackman", Genre: "Soca", Intro: "23-year old artist in Trinidad & Tobago" },
    { Name: "Kes", Genre: "Soca", Intro: "Upbeat band, best song is Hello" }
];

export const musicList = () => {
    const renderMusicList = () => MusicList.map(m => <beats Name={m.Name} Genre={m.Genre} Intro={m.Intro})
    return (
        
    )
}
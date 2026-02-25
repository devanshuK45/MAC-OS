import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({windowName, setWindowState}) => {
    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} width= '380px' height='480px'>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/playlist/6P5zwt2i6kMLw5b8FQVWEj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify
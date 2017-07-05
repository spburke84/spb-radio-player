import React, {Component} from 'react';
import {Link} from 'react-router';

import './App.css';

class SongDetails extends Component {
    render() {
        const songArr = this.props.routes[0].songs;
        const song = songArr[this.props.params.id];

        const bgUrl = song.bgImg;
        console.log(bgUrl);
        const bgStyle = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + bgUrl + ')'
        }

        return (
            <div className='songDetails' style={bgStyle}>
                <h3>{song.title}</h3>
                <p>
                    Album: {song.album}
                </p>
                <p>
                    Released: {song.released}
                </p>
                <p>
                    Length: {song.length}
                </p>
                <p>
                    Credits: {song.credits}
                </p>
                <p>
                    Label: {song.label}
                </p>
                <Link to='/songs'>Back</Link>
            </div>
        )
    }
}

export default SongDetails;
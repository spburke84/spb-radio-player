import React, {Component} from 'react';
import {Link} from 'react-router';
import Player from './Player';

class SongsList extends Component {
    constructor() {
        super();

    }

   /* makeRequest(id) {
        Player.requestSong(id);
    }*/
    
    render() {
        console.log(this.props)
        const songs = this.props.routes[0].songs;

        console.log('here');
        console.log(songs);
        console.log('here');

        let builtList = songs.map((songs, i) => {
            return (
                <div className='row'>
                    <li>{songs.title} || <Link to={ `/songs/${songs.id}` } song={songs}>details</Link></li>
                    <span className="glyphicon glyphicon-play listIcon" aria-hidden="true" onClick={() => {this.props.playSong(songs.id)}}></span>                    
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row" id="listJumbo">
                    <h1>Currently Playing on Radio SPB:</h1>
                </div>
                <div className="row">
                    <ol>
                        {builtList}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SongsList;
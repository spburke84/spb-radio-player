import React, {Component} from 'react';

class Player extends Component {
   constructor() {
        super();

        //songArr = this.props.songs;

        this.state = {
            currTrack: 0,
            songArr: {},
            random: false,
            repeat: false,
            nowPlaying: []
        }
        this.togglePlay = this.togglePlay.bind(this);
        this.togglePause = this.togglePause.bind(this);
        //this.goToNext = this.goToNext.bind(this);
        this.stopPlay = this.stopPlay.bind(this);
        //this.goToPrev = this.goToPrev.bind(this);
        this.toggleRandom = this.toggleRandom.bind(this);
        this.toggleRepeat = this.toggleRepeat.bind(this);
   }

   togglePlay() {
        document.getElementById('audioController').play();
   }

   togglePause() {
       if(!document.getElementById('audioController').paused)
            document.getElementById('audioController').pause();
        else
            document.getElementById('audioController').play();
   }

   stopPlay() {
       document.getElementById('audioController').load();
   }

   toggleRandom() {
       alert('Random play will be implemented in version 2');
   }

   toggleRepeat() {
       alert('Repeat will be implemented in version 2');
   }

    render() {
        console.log('Player Props: ')
        console.log(this.props);

        return (
            <span>
                <div className="row" id="player">
                    <audio controls hidden id="audioController">
                        <source src={this.props.song.source} type="audio/mpeg"/>
                    </audio>
                    <button type="button" className="btn btn-default" aria-label="Prev" onClick={() => {this.props.goToPrev()}}>
                        <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default" aria-label="Stop" onClick={this.stopPlay}>
                        <span className="glyphicon glyphicon-stop" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default" aria-label="Pause" onClick={this.togglePause}>
                        <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default" aria-label="Play" onClick={this.togglePlay}>
                        <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default" aria-label="Next" onClick={() => {this.props.goToNext()}}>
                        <span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default" aria-label="Random" onClick={this.toggleRandom}>
                        <span className="glyphicon glyphicon-random" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-default" aria-label="Repeat" onClick={this.toggleRepeat}>
                        <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="row">
                    <span>Now playing: {this.props.song.title}</span>
                </div>
            </span>
        );
    }
}

export default Player;
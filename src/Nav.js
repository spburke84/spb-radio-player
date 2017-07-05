import React, { Component } from 'react';
import {Link} from 'react-router';
import Player from './components/Player';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Nav.css';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
        currentTrack: 0
    }

    this.playSong = this.playSong.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  playSong(id) {
    this.setState({
      currentTrack: id
    });

    document.getElementById('audioController').load();
    document.getElementById('audioController').play(); 
  }

  goToPrev() {
      console.log('Click received');


       if(document.getElementById('audioController').currentTime > 1) {
           document.getElementById('audioController').currentTime = 0;
       } else {
           if(this.state.currentTrack === 0) {
               let endVar = this.props.route.songs.length-1;
               console.log(endVar);

               this.setState({
                   currentTrack: endVar,
                   //nowPlaying: this.state.songArr.songs[endVar] 
               });
           } else {
               let decrVar = this.state.currentTrack;
               decrVar--;

               this.setState({
                   currentTrack: decrVar,
                   //nowPlaying: this.state.songArr.songs[decrVar]
               });
           }
           document.getElementById('audioController').load();
           document.getElementById('audioController').play();           
       }
   }

   goToNext() {
       if(this.state.currentTrack < this.props.route.songs.length-1) {
           let incrVar = this.state.currentTrack;
           incrVar++;
           
           this.setState({
               currentTrack: incrVar
            });
       } else {
           this.setState({
               currentTrack: 0
           });
       }
       document.getElementById('audioController').load();
       document.getElementById('audioController').play();   
   }

  render() {
    const songs = this.props.route.songs;
    return (
      <div className="container">
          
        <div className="row" id="navBar">
          <div className="col-sm-8">
            <nav>
              <h1><b>R</b>adio <b>SPB</b> </h1>
                <p>Playing these six songs forever</p>
            </nav>
          </div>
          <div className="col-sm-4">
            <Player song={songs[this.state.currentTrack]} goToPrev={this.goToPrev} goToNext={this.goToNext}/>
          </div>
        </div>
          {React.cloneElement(this.props.children, {
            playSong: this.playSong,
          })}
          {/*this.props.children*/}
      </div>
    );
  }
}

export default Nav;

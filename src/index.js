import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Nav from './Nav';
import App from './App';

import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';

import './index.css';

function Song(source, title, album, released, length, credits, label, bgImg, id) {
  this.source = source;
  this.title = title;
  this.album = album;
  this.released = released;
  this.length = length;
  this.credits = credits;
  this.label = label;
  this.bgImg = bgImg;
  this.id = id;
}

const songs = [
  new Song('/one_armed_scissor.mp3', 'At The Drive-In - One-Armed Scissor', 'Relationship of Command', '7 August 2000', '3:45', 'Cedric Bixler-Zavala, Tony Hajjar, Paul Hinojos, Omar Rodriguez-Lopez and Jim Ward', 'Grand Royal','/atdi.png', 0),
  new Song('/drunkship_of_lanterns.mp3', 'The Mars Volta - Drunkship of Lanterns', 'De-Loused in the Comatorium', '23 June 2003','7:06', 'Omar Rodriguez-Lopez and Cedric Bixler-Zavala', 'Universal Records','/tmv.png', 1),
  new Song('/dancing_through_sunday.mp3', 'AFI - Dancing Through Sunday', 'Sing the Sorrow', '11 March 2003', '2:26', 'Davey Havok, Jade Puget, Hunter Burgan and Adam Carson', 'DreamWorks', '/afi.png', 2),
  new Song('/paper_tigers.mp3', 'Thrice - Paper Tigers', 'The Artist in the Ambulance', '22 July 2003', '3:59', 'Dustin Kensrue, Teppei Teranishi, Eddie Breckenridge and Riley Breckenridge', 'Island','/thrice.png', 3),
  new Song('/hangin_tree.mp3', 'Queens of the Stone Age - Hangin\' Tree', 'Songs for the Deaf', '27 August 2002', '3:06', 'Josh Homme and Alain Johannes', 'Interscope', '/qotsa.png', 4),
  new Song('/sugar.mp3', 'System of a Down - Sugar', 'System of a Down', '30 June 1998', '2:33', 'Serj Tankian, Shavo Odadjian and Daron Malakian', 'Columbia', '/soad.png', 5)
]

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" songs={songs} component={Nav}>
      <IndexRoute component={SongsList} />
      <Route path="songs" songs={songs} component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
),document.getElementById('root'));

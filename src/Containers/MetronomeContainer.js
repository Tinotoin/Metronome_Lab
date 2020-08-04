import React, {Component} from 'react';
import PlayControls from '../Components/PlayControls';
import beepFile from '../Resources/beep-07.mp3';

class MetronomeContainer extends Component{

  constructor(props){
    super(props);
      this.state= {
        beep: new Audio(beepFile),
        loop: true
      }

      this.playAudio = this.playAudio.bind(this);
      this.togglePlay = this.togglePlay.bind(this);
      // this.loopAudio = this.loopAudio.bind(this);
      this.pauseAudio = this.pauseAudio.bind(this);

  }

loopAudio(){
  const intervalID = setInterval(this.playAudio, 1000);
  return intervalID
}

playAudio(){
  // this.state.beep.currentTime = 0;
  return this.state.beep.play();
}

pauseAudio(){
  clearInterval(this.loopAudio);
}

togglePlay() {
        this.setState({
            loop: !this.state.loop
        });
        this.state.loop ? this.loopAudio() : this.pauseAudio();
        this.state.loop = true;
    }

render(){
  return(
    <PlayControls beep = {this.state.beep} playBeep = {this.loopAudio} toggle={this.togglePlay}/>


  )

}

}

export default MetronomeContainer;

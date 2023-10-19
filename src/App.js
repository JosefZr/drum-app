import logo from './logo.svg';
import { useEffect ,useState} from 'react';
import './App.css';

function App() {
  const[activeKey,setActiveKey] = useState("");

  function playSound(keyTrigger) {
    const audio = document.getElementById(keyTrigger);
  
    // Check if the audio element exists
    if (audio) {
      if (!audio.paused) {
        audio.currentTime = 0; // Set currentTime to the beginning
      }
      // Play the audio and set the active key
      audio.play().catch((error) => {
        console.error('Audio playback error:', error);
      });
      setActiveKey(keyTrigger);
    }
  }
  
  const  audioClips = [
    {
      keyTrigger:"Q",
      keyCode:81,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description:"Heater 1",
    },
    {
      keyTrigger:"W",
      keyCode:87,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description:"Heater 2",
    },
    {
      keyTrigger:"E",
      keyCode:69,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description:"Heater 3",
    },
    {
      keyTrigger:"A",
      keyCode:65,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description:"Heater 4",
    },
    {
      keyTrigger:"S",
      keyCode:83,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description:"Clap",
    },
    {
      keyTrigger:"D",
      keyCode:68,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description:"Open-HH",
    },
    {
      keyTrigger:"Z",
      keyCode:90,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description:"Kick-n'-Hat",
    },
    {
      keyTrigger:"X",
      keyCode:88,
      url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description:"Kick",
    },
    {
      keyTrigger:"C",
      keyCode:67,
      url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description:"Closed-HH",
    },
  ]
  useEffect(()=>{
    document.addEventListener("keydown",(event)=>{
      playSound(event.key.toUpperCase())
    })
  })
  return (
    <div className='app'>
      <div id="drum-machine" className='container'>
        <h1>Welcome to the Drum Machine</h1>
        <div id='display'>{activeKey}</div>
        <div className='drum-pads'>
          {audioClips.map((drumPad) => (
            <div
              key={drumPad.url}
              onClick={() => playSound(drumPad.keyTrigger)}
              className='drum-pad'
              id={drumPad.url}
            >
              {drumPad.keyTrigger}
              <audio
              className='clip'
              id={drumPad.keyTrigger}
              src={drumPad.url}
          ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
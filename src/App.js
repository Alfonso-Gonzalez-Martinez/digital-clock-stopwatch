import './App.css';
import DigitalClock from './components/DigitalClock'
import Stopwatch from './components/Stopwatch';
function App() {
  return (
    <>
      <div className='app-container'>
        <DigitalClock />
        <Stopwatch />
      </div>
    </>
  );
}

export default App;

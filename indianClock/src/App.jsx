import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import ClockCurrentTime from './components/ClockTime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
      <center>
          <ClockHeading />
          <ClockSlogan />
          <ClockCurrentTime />
      </center>
  );
   
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';



function App() {
  return (
    <div className="container">
      <Header />
      <Player/>
    </div>
  );
}

export default App;

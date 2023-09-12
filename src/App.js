
import './App.css';
import BoxList from './BoxList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Box Maker</h1>
      </header>
      <div><BoxList height={60} width={120} color='blue'/></div>
    </div>
  );
}

export default App;

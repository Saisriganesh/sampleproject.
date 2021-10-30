import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Register from './Rigister';
import UnionBank from './UnionBank';
import State from './State';

function App() {
  return (
    <div className="App">
       <Login/>
       <Register/>
       <UnionBank/>
       <State/>
    </div>
  );
}

export default App;

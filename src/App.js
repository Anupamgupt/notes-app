import './App.css';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import { useSelector } from 'react-redux';
import Error from './error/Error';

function App() {
  const data=useSelector((state)=>state.update)
  return (
    <div className="App">
        <Navbar />
        <Landing/>
        <div>
          <Error/>
        </div>
    </div>  
  );
}

export default App;

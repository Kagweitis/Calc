import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculate from './components/Calculate';
import { useState } from 'react'

function App() {


  const [answer, setAnswer] = useState('')
  
  const calculate = () => {

    return answer
  }

  return (
    <div className="App">
      <Header />
      <Calculate calculate={calculate} />
      <Footer />
        
    </div>
  );
}

export default App;

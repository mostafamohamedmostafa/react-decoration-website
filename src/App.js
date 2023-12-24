import logo from './logo.svg';
import './App.css';
import Navbarsection from './components/Navbarsection';
import Herosection from './components/Herosection';
import Whyussection from './components/Whyussection';
import Featuressection from './components/Featuressection.js';
import Historysection from './components/Historysection';
import Servicessection from './components/Servicessection';
 import Servicessetpssection from './components/Servicestepssection';
import Contactussection from './components/Contactussection';
import Customersection from './components/Customerssection.js';

function App() {

  return (
    <div className="App">
<Navbarsection/>
<Herosection/>
<Whyussection/>
<Featuressection/>
<Historysection/>
<Servicessection/>
 <Servicessetpssection/>
 <Customersection/>
<Contactussection/>


    </div>
  );
}

export default App;

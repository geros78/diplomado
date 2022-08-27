import Compclase from './components/Compclase';
import Compfuncion from './components/Compfuncion';
import Variables from './components/Variables';
import Evento from './components/Evento';
import Estado from './components/Estado';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';


const elemento=<p>Desarrollo web</p>
const title="Front End"


function App() {
  return (
    <div className="App">
      <h1>Hola desde React</h1>
      <h2>Bienvenidos</h2>
      {elemento}
      <Formulario></Formulario>
      <div>{title}</div>
      <Compclase></Compclase>
      <Compclase></Compclase>
      <Compclase></Compclase>
      <Compfuncion></Compfuncion>
      <Variables></Variables>
      <Evento></Evento>
      <Estado></Estado>
      <Contador></Contador>
      <Lista></Lista>
    </div>
    
  );
}

export default App;

import './App.css';
import Card from './Assets/Components/Card/Card';
import Table from './Assets/Components/Table/Table';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Examen primer parcial</h1>
       <p>Nombre: Brian Axel</p> 
       <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
       <Card title="Tarjeta 1" description="Esta es la descripción de la tarjeta 1." />
        <Card title="Tarjeta 2" description="Esta es la descripción de la tarjeta 2." />
        <Card title="Tarjeta 3" description="Esta es la descripción de la tarjeta 3." />
        <Card title="Tarjeta 4" description="Esta es la descripción de la tarjeta 4." />
      </div>
        <Table />
      </header>
    </div>
  );
}

export default App;

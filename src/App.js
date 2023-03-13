import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './Pages/UserForm';
import Page_Route from './Pages/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Form/>
      <Page_Route/>
      </BrowserRouter>
    </div>
  );
}

export default App;

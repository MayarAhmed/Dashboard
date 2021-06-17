import './App.css';
import { Route, Switch } from 'react-router-dom';
import Aux from './hoc/Auxiliary'
import Layout from './assets/components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Aux>
      <Switch>
      <Route path="/" exact component = {Layout}/> 
      </Switch>
    </Aux>
  );
}

export default App;

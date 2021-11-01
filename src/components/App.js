import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import Header from './Header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Books />
      </Route>
      <Route exact path="/categories">
        <Categories />
      </Route>
    </Switch>
  </Router>
);

export default App;

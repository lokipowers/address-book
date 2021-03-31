import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from './components/Navigation';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import AddContact from './views/AddContact';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/contact/:contactId">
            Contact...
          </Route>
          <Route path="/add-contact">
            <AddContact />
          </Route>
          <Route path="/edit-contact/:contactId">
            Edit Contact [id]
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

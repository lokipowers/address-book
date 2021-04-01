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

import Dexie from 'dexie';
import ViewContact from './views/ViewContact';

export default function App() {

  let db = new Dexie('AddressBookDatabase');
  db.version(1).stores({contacts: "++id,slug,contactDetails"});
  db.open().catch(e => {
    console.error(`Failed to open db: ${e.stack || e}`);
  })
  return (
    <Router>
      <Navigation />
      <Container className="mb-5">
        <Switch>
          <Route path="/contact/:contactId">
            <ViewContact db={db} />
          </Route>
          <Route path="/add-contact">
            <AddContact db={db} />
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

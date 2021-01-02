import "./App.css";
import { Container } from "@material-ui/core";

import Header from "./containers/header/Header";

function App() {
  return (
    <div className="app">
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;

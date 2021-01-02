import "./App.css";
import { Container } from "@material-ui/core";

import Header from "./containers/header/Header";
import MainFeatured from "./containers/mainFeatured/MainFeatured";

function App() {
  return (
    <div className="app">
      <Container>
        <Header />
        <MainFeatured />
      </Container>
    </div>
  );
}

export default App;

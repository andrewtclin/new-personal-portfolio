import "./App.css";
import { Container } from "@material-ui/core";

import Header from "./containers/header/Header";
import MainFeatured from "./containers/mainFeatured/MainFeatured";
import FeaturedWork from "./containers/featuredWork/FeaturedWork";

function App() {
  return (
    <div className="app">
      <Container>
        <Header />
        <MainFeatured />
        <FeaturedWork />
      </Container>
    </div>
  );
}

export default App;

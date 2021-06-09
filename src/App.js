import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./Component/Navbar";
import Header from "./Component/Header";
import RowOfMovies from "./Component/RowOfMovies";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowDetails from './Component/ShowDetails'

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Route exact path='/'>
          <Header />
          <RowOfMovies title="Star Wars" />
          <RowOfMovies title="Harry Potter" />
          <RowOfMovies title="The lord of the rings" />
        </Route>
        <Route path='/details/:movieId' component={ShowDetails}/>
      </Router>
    </>
  );
}

export default App;

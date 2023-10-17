import HeaderComp from "./components/HeaderComp";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const Home = () => {
  const API_KEY = "b5ebf82e178f94307836ec078a4ed051";
  const BASE_URL = "https://api.themoviedb.org/3";
  return (
    <div className="home" style={{ margin: "0" }}>
      <NavBar></NavBar>
      <HeaderComp API_KEY={API_KEY} BASE_URL={BASE_URL}></HeaderComp>
      <h1>Featured Movie</h1>
      <MovieList API_KEY={API_KEY} BASE_URL={BASE_URL}></MovieList>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";

import Card from "@mui/joy/Card";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const HeaderComp = ({ API_KEY, BASE_URL }) => {
  const [movies, setMovies] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }
  const randomNumber = getRandomNumber();
  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results[randomNumber]);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  return (
    <div className="header">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}

      {movies && (
        <Card
          className="movie-header"
          sx={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies.backdrop_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "70vh",
            zIndex: -5,
            position: "relative",
            borderRadius: "0",
            paddingLeft: "5rem",
          }}
        >
          <div
            className="desc"
            style={{
              position: "absolute",
              bottom: "0",
              color: "white",
              maxWidth: "45%",
            }}
          >
            <h1 className="header-title" style={{ fontSize: "2rem" }}>
              {movies.title}
            </h1>
            <p className="vote-average">{movies.vote_average}</p>
            <p className="overview">{movies.overview}</p>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 15px",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <PlayCircleIcon></PlayCircleIcon>
              Watch Trailer
            </button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default HeaderComp;

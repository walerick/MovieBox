import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import Card from "@mui/joy/Card";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ListIcon from "@mui/icons-material/List";

import Grid from "@mui/material/Unstable_Grid2";

const MoviePage = () => {
  const API_KEY = "b5ebf82e178f94307836ec078a4ed051";
  const BASE_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="MoviePage" style={{ margin: "0" }}>
      <SideNav></SideNav>
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {movies && (
        <div
          className="movie-container"
          style={{ paddingTop: "20px", marginInline: "250px 30px" }}
        >
          <Card
            className="movie-video-card"
            sx={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies.backdrop_path}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "60vh",
              zIndex: -5,
              position: "relative",
              borderRadius: "18px",
            }}
          ></Card>
          <div className="movie-desc" style={{ display: "flex", gap: "1rem" }}>
            <h3>{movies.title} .</h3>
            <h3>{movies.release_date} .</h3>
            <h3>{movies.runtime}</h3>
          </div>
          <Grid
            className="movie-content"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid className="deep-content" xs={8}>
              <p>{movies.overview}</p>
              <p>
                Director: <span>Joseph Kosinki</span>
              </p>
              <p>
                Writers: <span>Jim Cash, Jack Epps, Peter Craig</span>
              </p>
              <p>
                Stars: <span>Tom Cruise, Jennifer Conelly, Milles Teller</span>
              </p>
            </Grid>
            <Grid xs={4}>
              <div className="deep-ads">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button startDecorator={<BookOnlineIcon />}>
                    See Showtimes
                  </Button>
                  <Button startDecorator={<ListIcon />}>
                    More Watch Options
                  </Button>
                  <img
                    src={
                      "https://movieshowbox.vercel.app/assets/BestMovies-3afd066b.png"
                    }
                    width={"100%"}
                    alt="picture"
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNav from "./components/SideNav";
import { Card, Box, Button, IconButton, CircularProgress } from "@mui/joy";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ListIcon from "@mui/icons-material/List";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Grid from "@mui/material/Unstable_Grid2";

const MoviePage = () => {
  const API_KEY = "b5ebf82e178f94307836ec078a4ed051";
  const BASE_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const firstVideo = movies.length > 0 ? movies[0] : null;

  return (
    <div className="MoviePage" style={{ margin: "0" }}>
      <SideNav></SideNav>
      {error && <div>{error}</div>}
      {isPending && (
        <CircularProgress
          color="neutral"
          determinate={false}
          size="lg"
          value={30}
          variant="plain"
          style={{ position: "fixed", left: "50%", top: "50%" }}
        />
      )}
      {firstVideo && (
        <div className="movie-container">
          <div className="movie-video">
            <div>
              <p>{firstVideo.name}</p>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "90vw",
                  aspectRatio: "16/9", // Adjust the aspect ratio as needed
                  borderRadius: "12px",
                }}
              >
                <iframe
                  title={firstVideo.name}
                  src={`https://www.youtube.com/embed/${firstVideo.key}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                ></iframe>
              </Box>
            </div>
          </div>

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
                Director:{" "}
                <span style={{ color: "#CA3E61" }}>Joseph Kosinki</span>
              </p>
              <p>
                Writers:{" "}
                <span style={{ color: "#CA3E61" }}>
                  Jim Cash, Jack Epps, Peter Craig
                </span>
              </p>
              <p>
                Stars:{" "}
                <span style={{ color: "#CA3E61" }}>
                  Tom Cruise, Jennifer Conelly, Milles Teller
                </span>
              </p>
            </Grid>
            <Grid xs={4}>
              <div className="deep-ads">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Button
                    startDecorator={<BookOnlineIcon />}
                    style={{ backgroundColor: "#BE123C" }}
                  >
                    See Showtimes
                  </Button>
                  <Button
                    startDecorator={<ListIcon />}
                    style={{
                      backgroundColor: "#F8E7EB",
                      border: "1px solid #BE123C",
                      color: "black",
                    }}
                  >
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

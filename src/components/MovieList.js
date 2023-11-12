import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Container,
  Typography,
  AspectRatio,
  CardOverflow,
  Grid,
  IconButton,
  Box,
} from "@mui/joy";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import useFetch from "./useFetch";

const MovieList = ({ API_KEY, BASE_URL }) => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

  return (
    <div className="movie-list">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {movies && (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <Card
                    sx={{
                      width: 200,
                      height: 400,
                      border: "none",
                      borderRadius: "0",
                      marginBottom: "2rem",
                    }}
                    key={movie.id}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="0.8">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <IconButton
                      style={{
                        position: "absolute",
                        right: "10px",
                        borderRadius: "50%",
                      }}
                      variant="soft"
                    >
                      <FavoriteBorder style={{ fontSize: "20px" }} />
                    </IconButton>

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        color="text.secondary"
                        sx={{ fontSize: "12px" }}
                      >
                        {movie.release_date}
                      </Typography>
                      <Typography
                        variant="h1"
                        color="text.primary"
                        sx={{ fontSize: "18px" }}
                      >
                        {movie.title}
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img src={require("../download.png")} alt="imdb" />
                          82.0/100
                        </Box>
                        <Box
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <img src={require("../rate_berry.png")} alt="imdb" />
                          87%
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default MovieList;

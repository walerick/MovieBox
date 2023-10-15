import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  AspectRatio,
  CardOverflow,
  Grid,
} from "@mui/joy";
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
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={3}>
              <Link to={`/movies/${movie.id}`}>
                <Card
                  sx={{ width: 250, height: 400, borderRadius: "0" }}
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

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie.release_date}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MovieList;

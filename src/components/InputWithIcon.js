import * as React from "react";
import useFetch from "./useFetch";
import { Box, FormControl } from "@mui/joy";
import { InputAdornment } from "@mui/material";
import Autocomplete from "@mui/joy/Autocomplete";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function InputWithIcon() {
  const API_KEY = "b5ebf82e178f94307836ec078a4ed051";
  const BASE_URL = "https://api.themoviedb.org/3";
  const {
    data: movies,
    isPending,
    error,
  } = useFetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return (
    <Box>
      <FormControl
        id="free-solo-2-demo"
        style={{ width: "30rem", color: "white" }}
      >
        <Autocomplete
          endDecorator={<SearchOutlinedIcon style={{ color: "white" }} />}
          placeholder="What do you want to watch?"
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid",
          }}
          type="search"
          freeSolo
          disableClearable
          options={movies.map((movie) => movie.title)}
        />
      </FormControl>
    </Box>
  );
}

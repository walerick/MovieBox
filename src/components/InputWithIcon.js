import * as React from "react";
import { Box, FormControl } from "@mui/joy";
import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function InputWithIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard"></FormControl>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}

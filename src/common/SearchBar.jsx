import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function SearchBar({ text, width = "50%" }) {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
        <TextField
          id="input-with-icon-textfield"
          placeholder={text}
          sx={{ width: { xs: "100%", md: width } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
        />
      </Box>
    </>
  );
}

export default SearchBar;

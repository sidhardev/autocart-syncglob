import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function SearchBar() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search Ads"
          sx={{ width: "50%" }}
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

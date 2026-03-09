import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ text, width = "420px" }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        placeholder={text}
        fullWidth
        variant="outlined"
        sx={{
          width: { xs: "100%", sm: width },
          maxWidth: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            height: { xs: 40, sm: 44 },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9CA3AF" }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;

import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIosNewIcon />}
      disableElevation
      onClick={() => navigate(-1)}
      sx={{
        color: "#07B007",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        "&:hover": {
          background: "#F9F9F9",
          color: "#07b00758",
        },
      }}
    ></Button>
  );
}

export default GoBackButton;

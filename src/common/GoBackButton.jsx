import { Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button
       startIcon={<ArrowBackIosNewIcon />}
      onClick={() => navigate(-1)}
      sx={{ 
        color: "#07B007"
    }}>
     </Button>
  );
}

export default GoBackButton;
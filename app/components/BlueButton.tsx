"use client";
import theme from "@/utils/theme";
import { Button } from "@mui/material";

const BlueButton: React.FC = () => {
  const blueButtonStyles = {
    backgroundColor: theme.palette.primary.main,
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  };
  return (
    <Button sx={blueButtonStyles} color="success">
      Hello
    </Button>
  );
};
export default BlueButton;

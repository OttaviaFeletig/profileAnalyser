import React from "react";
import bg from "../img/bg2.jpg";
import AddText from "../components/AddText";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
interface Props {}

const AddDatingText: React.FC = () => {
  const backgroundStyles = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={backgroundStyles}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        <Box
          fontWeight="fontWeightBold"
          fontSize={92}
          letterSpacing={14}
          fontFamily="Monospace"
          color="#FFD700"
        >
          SWAT
        </Box>
      </Typography>
      <AddText />
    </div>
  );
};

export default AddDatingText;

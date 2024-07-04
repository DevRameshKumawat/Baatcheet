import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { lightGray, matBlack } from "../constants/color";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenu((prev) => !prev);
  };

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            left: "1.5rem",
            top: "2rem",
            bgcolor: matBlack,
            color: "white",
            ":hover": {
              bgcolor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <div>
      <Grid container height={"100vh"}>
        <Grid
          item
          sx={{ display: { xs: "none", sm: "block" } }}
          sm={4}
          bgcolor={lightGray}
        >
          Groups List
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "1rem 3rem",
          }}
        >
          {IconBtns}
        </Grid>
      </Grid>
    </div>
  );
};

export default Group;

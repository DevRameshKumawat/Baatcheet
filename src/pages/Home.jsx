import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Typography p={"2rem"} variant={"h5"} textAlign={"center"}>
        Select a user to chat
      </Typography>
    </Box>
  );
};

const HomeWithLayout = AppLayout(Home);

export default HomeWithLayout;

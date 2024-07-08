import { CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { VisuallyHiddenInput } from "../../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../../utils/validators";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
  const password = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #33ccff 0%, #ff99cc 100%)",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography varient="h5">Admin Login</Typography>
          <form
            style={{ marginTop: "1rem", width: "100%" }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              varient="outlined"
              value={password.value}
              onChange={password.changeHandler}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ marginTop: "1rem" }}
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;

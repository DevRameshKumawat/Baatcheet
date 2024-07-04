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
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSignup = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

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
          {isLogin ? (
            <>
              <Typography varient="h5">Login</Typography>
              <form
                style={{ marginTop: "1rem", width: "100%" }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  varient="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" varient="caption">
                    {username.error}
                  </Typography>
                )}
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
                <Typography textAlign={"center"} sx={{ marginTop: "1rem" }}>
                  or
                </Typography>
                <Button fullWidth varient="text" onClick={toggleLogin}>
                  Register
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography varient="h5">Register User</Typography>
              <form
                style={{ marginTop: "1rem", width: "100%" }}
                onSubmit={handleSignup}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      hover: { bgcolor: "rgba(0,0,0,0.8)" },
                    }}
                    component={"label"}
                  >
                    <>
                      <CameraAlt />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    varient="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  varient="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  varient="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  varient="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
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
                  Register
                </Button>
                <Typography textAlign={"center"} sx={{ marginTop: "1rem" }}>
                  or
                </Typography>
                <Button fullWidth varient="text" onClick={toggleLogin}>
                  Login
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;

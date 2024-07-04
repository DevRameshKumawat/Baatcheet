import { Add as AddIcon } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded = false }) => {
  const { name, _id, avatar } = user;
  return (
    <>
      <ListItem>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={"1rem"}
          width={"100%"}
        >
          <Avatar />
          <Typography
            variant="body1"
            sx={{
              flexGlow: 1,
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {name}
          </Typography>
          <IconButton
            size="small"
            sx={{
              bgcolor: isAdded ? "error.light" : "primary.light",
              color: "white",
              "&:hover": {
                bgcolor: isAdded ? "error.dark" : "primary.dark",
                color: "white",
              },
            }}
            onClick={() => handler(_id)}
            disabled={handlerIsLoading}
          >
            {isAdded ? <RemoveIcon /> : <AddIcon />}
          </IconButton>
        </Stack>
      </ListItem>
    </>
  );
};

export default memo(UserItem);

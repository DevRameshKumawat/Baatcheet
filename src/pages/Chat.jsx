import React, { Fragment, useRef } from "react";

import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import { senderColor, senderColorHover } from "../constants/color";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../constants/SampleData";
import MessageCom from "../components/shared/MessageCom";

const user = {
  _id: "novo",
  name: "novoc",
};
const Chat = () => {
  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"white"}
        height={"90%"}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >
        {sampleMessages.map((i) => (
          <MessageCom key={i._id} message={i} user={user} />
        ))}
      </Stack>
      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "45deg",
              p: "10px",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder={"Type a message"}
            sx={{ paddingLeft: "4rem" }}
          />

          <IconButton
            type="submit"
            sx={{
              backgroundColor: senderColor,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": { backgroundColor: senderColorHover },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  );
};

const ChatWithLayout = AppLayout(Chat);

export default ChatWithLayout;

import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { SampleChats } from "../../constants/SampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("delete chat", _id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4px)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
            bgcolor="#e3e6e4"
          >
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              newMessagesAlert={[{ chatId, count: 4 }]}
              onlineUsers={["1", "2", "3"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0, 0, 0, 0.5)",
            }}
            height={"100%"}
            bgcolor="primary"
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;

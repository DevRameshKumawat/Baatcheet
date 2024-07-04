import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <>
      <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
          sx={{
            width: 200,
            height: 200,
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5spx solid white",
          }}
        />
        <ProfileCard
          heading={"Bio"}
          text={"Kuchh nhi bhaiya bas thoda kaam kar rhe hai"}
        />
        <ProfileCard
          heading={"Username"}
          text={"ramesh.dev"}
          Icon={UsernameIcon}
        />
        <ProfileCard heading={"Name"} text={"Ramesh Kumawat"} Icon={FaceIcon} />
        <ProfileCard
          heading={"Joined"}
          text={moment().format("LL")}
          Icon={CalendarIcon}
        />
      </Stack>
    </>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && <Icon />}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption" color={"gray"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

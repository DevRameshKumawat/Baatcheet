import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { memo, useState } from "react";
import { sampleNotifications } from "../../constants/SampleData";
import { sampleUsers } from "../../constants/SampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };

  const submitHandler = () => {};

  const closeHandler = () => {};

  return (
    <>
      <Dialog open>
        <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
          <DialogTitle textAlign={"center"} variant="h5">
            New Group
          </DialogTitle>
          <TextField
            label="Group Name"
            variant="outlined"
            size="small"
            value={groupName.value}
            onChange={groupName.changeHandler}
          />
          <Typography variant="body1">Members</Typography>
          <Stack>
            {sampleUsers.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))}
          </Stack>
          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Button variant={"outlined"} color="error" onClick={closeHandler}>
              Cancel
            </Button>
            <Button variant={"contained"} onClick={submitHandler}>
              Create
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default NewGroup;

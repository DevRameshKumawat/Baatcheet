import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, memo, useEffect, lazy, Suspense } from "react";
import { lightGray, matBlack } from "../constants/color";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { SampleChats } from "../constants/SampleData";

const Group = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const navigate = useNavigate();
  const ChatId = useSearchParams()[0].get("group");

  const ConfirmDeleteDialog = lazy(() =>
    import("../components/dialogs/ConfirmDeleteDialog")
  );
  const AddMemberDialog = lazy(() =>
    import("../components/dialogs/AddMemberDialog")
  );

  const isAddMember = false;

  useEffect(() => {
    setGroupName(`Group Name ${ChatId}`);
    setGroupNameUpdatedValue(`Group Name ${ChatId}`);

    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");

      setIsEdit(false);
    };
  }, [ChatId]);

  const navigateBack = () => {
    navigate("/");
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const updateGroupName = () => {
    setIsEdit(false);
    console.log("update group name");
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("confirm delete");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
    console.log("close confirm delete");
  };

  const openAddMemberHandler = () => {
    console.log("open add member");
  };

  const deleteHandler = () => {
    console.log("delete");
  };

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />

          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

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

  const ButtonGroup = (
    <>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={"1rem"}
        p={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
      >
        <Button
          size="large"
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={openConfirmDeleteHandler}
        >
          DeleteGroup
        </Button>
        <Button
          size="large"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={openAddMemberHandler}
        >
          Add Member
        </Button>
      </Stack>
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
          <GroupList myGroups={SampleChats} />
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
          {groupName && (
            <>
              {GroupName}
              <Typography
                margin={"2rem"}
                alignSelf={"flex-start"}
                variant="body1"
              >
                Members
              </Typography>
              <Stack
                maxWidth={"45rem"}
                width={"100%"}
                boxSizing={"border-box"}
                padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
                spacing={"1rem"}
                bgcolor={"bisque"}
                height={"50vh"}
                overflow={"auto"}
              >
                {/* Members */}
              </Stack>
              {ButtonGroup}
            </>
          )}
        </Grid>
        {isAddMember && (
          <Suspense fallback={<Backdrop open />}>
            <AddMemberDialog open={isAddMember} />
          </Suspense>
        )}
        {confirmDeleteDialog && (
          <Suspense fallback={<Backdrop open />}>
            <ConfirmDeleteDialog
              open={confirmDeleteDialog}
              handleClose={closeConfirmDeleteHandler}
              deleteHandler={deleteHandler}
            />
          </Suspense>
        )}
        <Drawer
          sx={{ display: { xs: "block", sm: "none" } }}
          open={isMobileMenuOpen}
          onClose={handleMobileClose}
        >
          <GroupList w={"50vw"} myGroups={SampleChats} chatId={ChatId} />
        </Drawer>
      </Grid>
    </div>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No Group
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacong={"1rem"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;

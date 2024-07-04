import React from "react";
import { transformImage } from "../../lib/features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const Attachment = (file, url) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls />;

    case "image":
      return (
        <img
          src={transformImage(url)}
          alt="attachment"
          width={"200px"}
          height={"150px"}
          style={{ objectFit: "contain" }}
        />
      );

    case "audio":
      return <audio src={url} preload="none" controls />;

    default:
      return <FileOpenIcon />;
  }
  return <div>Attachment</div>;
};

export default Attachment;

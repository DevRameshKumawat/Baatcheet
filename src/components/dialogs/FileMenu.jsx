import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <>
      <Menu anchorEl={anchorE1} open={false}>
        <div style={{ width: "10rem" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
          aperiam odit? Velit deserunt voluptate nesciunt obcaecati deleniti, at
          dicta veniam eius aperiam eveniet sint dolorem sunt commodi aliquid
          omnis error!
        </div>
      </Menu>
    </>
  );
};

export default FileMenu;

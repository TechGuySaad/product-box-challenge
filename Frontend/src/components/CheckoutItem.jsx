import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
const CheckoutItem = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md w-[600px]">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="King Size Bed" src="http://localhost:3000/img/bed.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Bed"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                300$
              </Typography>
            </>
          }
        />
      </ListItem>
      <CancelIcon />
    </div>
  );
};

export default CheckoutItem;

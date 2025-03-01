import React from "react";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
const CheckoutItem = ({
  id,
  name,
  price,
  img,
  checkoutItems,
  setCheckoutItems,
}) => {
  const cleanUrl = img.startsWith(".") ? img.replace(/^\./, "") : img;
  let imageUrl = `http://localhost:3000${cleanUrl}`;
  const handleRemoveCartItem = () => {
    console.log("I was clicked");

    for (let i = 0; i < checkoutItems.length; i = i + 1) {
      // console.log(checkoutItems[i]);
      if (id === checkoutItems[i].id) {
        checkoutItems.splice(i, 1);
        setCheckoutItems([...checkoutItems]);
        break;
      }
    }

    localStorage.setItem("checkoutItems", JSON.stringify(checkoutItems));

    console.log("after removing", checkoutItems);
  };
  return (
    <div className="flex items-center border border-gray-300 rounded-md w-[600px]">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={`${name}`} src={imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={`${name}`}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                {price}$
              </Typography>
            </>
          }
        />
      </ListItem>
      {/* <Button> */}

      <button onClick={handleRemoveCartItem} style={{ cursor: "pointer" }}>
        <CancelIcon />
      </button>
      {/* </Button> */}
    </div>
  );
};

export default CheckoutItem;

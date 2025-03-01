import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

// directly destructuring the props object into parameters
export default function ItemCard({
  id,
  name,
  price,
  image,
  checkoutItems,
  setCheckoutItems,
}) {
  const cleanUrl = image.startsWith(".") ? image.replace(/^\./, "") : image;
  let imageUrl = `http://localhost:3000${cleanUrl}`;

  const handleAddItem = () => {
    const newItem = { id, name, price, image };
    setCheckoutItems((prevItems) => [...prevItems, newItem]);
    // console.log("checkoutItems:", checkoutItems);

    localStorage.setItem("checkoutItems", JSON.stringify(checkoutItems));
    // console.log("local storage items:", localStorage.getItem("checkoutItems"));
  };

  return (
    <Card sx={{ width: 350, backgroundColor: "beige" }} elevation={5}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={"100px"}
          width={"100%"}
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddItem}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

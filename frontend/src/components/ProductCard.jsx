import React from "react";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import axios from "axios";

function ProductCard({ el, role, fetch }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/products/${id}`);
      fetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{el.name}</Typography>
        <Typography level="body-sm">{el.category}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={el.imageUrl} loading="lazy" alt={el.name} />
      </AspectRatio>
      <CardContent orientation="vertical">
        <Typography level="body-sm">{el.description}</Typography>
        <div>
          <Typography level="body-xs">Price:</Typography>
          <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
            ${el.price.toFixed(2)}
          </Typography>
        </div>
        {el.quantity > 0 ? (
          <Typography level="body-sm" color="success">
            In Stock: {el.quantity} available
          </Typography>
        ) : (
          <Typography level="body-sm" color="danger">
            Out of Stock
          </Typography>
        )}
        {role === "admin" && (
          <Button
            size="md"
            variant="solid"
            color="danger"
            onClick={() => handleDelete(el.id)}
          >
            Delete
          </Button>
        )}
        <Button
          variant="solid"
          size="md"
          color="primary"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

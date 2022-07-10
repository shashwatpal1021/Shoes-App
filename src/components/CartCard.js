import { Box, Button, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";

const CartCard = ({
  imageURL,
  title,
  color,
  size,
  price,
  isDark,
  cartItems,
  removeFromCart,
  index,
}) => {
  const handleRemove = () => {
    removeFromCart(index);
  };

  return (
    <Box
      h="32em"
      w="20em"
      maxW="30em"
      maxH="36em"
      bgColor={"black"}
      display="flex"
      flexDir="column"
      gap="1.5em"
      p="3em"
      justifyContent="center"
      color={"white"}
    >
      <Image src={imageURL} maxW="10em" maxH="6em" objectFit="contain" />
      <Text fontSize="xl">{title}</Text>
      <Box display="flex" alignItems="center" gap="1em">
        <Text>Size:</Text>
        <Box display="flex" alignItems="center" gap="5px">
          <Tag p="0.8em">{size}</Tag>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap="1em">
        <Text>Color:</Text>
        <Box display="flex" alignItems="center" gap="5px">
          <Tag p="0.8em">
            <Button bgColor={color}></Button>
          </Tag>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap="1em">
        <Text>Price:</Text>
        <Text>₹{price}</Text>
      </Box>
      <Button
        variant="outline"
        color={isDark ? "white" : "black"}
        bgColor={isDark ? "#42C2FF" : "#00C897"}
        onClick={handleRemove}
      >
        Remove from cart
      </Button>
    </Box>
  );
};

export default CartCard;

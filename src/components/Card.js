import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
}

const Card = ({
  imageURL,
  title,
  colors,
  price,
  isDark,
  addToCart,
  cartItems,
}) => {
  const [colorState, setColorState] = useState(colors[0]);
  const [sizeState, setSizeState] = useState(7);
  const [image, setImage] = useState(imageURL[0]);

  const forceUpdate = useForceUpdate();

  const handleSize = (number) => {
    setSizeState(number);
  };

  const handleColor = (currentColor, index) => {
    setColorState(currentColor);
    //let currentImage = imageURL[colors.indexOf(colorState)];
    setImage(imageURL[index]);
    forceUpdate();
  };

  const handleSubmit = () => {
    const newObj = {
      imageUrl: image,
      title: title,
      size: sizeState,
      color: colorState,
      price: price,
    };
    let found = cartItems.some(
      (item) =>
        item.imageUrl === newObj.imageUrl &&
        item.color === newObj.color &&
        item.size === newObj.size
    );
    found === false && addToCart(newObj);
  };

  return (
    <Box
      h="32em"
      w="20em"
      maxW="30em"
      maxH="36em"
      bgColor={isDark ? "black" : "#B8FFF9"}
      display="flex"
      flexDir="column"
      gap="1.5em"
      p="3em"
      justifyContent="center"
      color={isDark ? "white" : "black"}
    >
      {image != null ? (
        <Image src={image} maxW="10em" maxH="6em" objectFit="contain" />
      ) : (
        ""
      )}
      <Text fontSize="xl">{title}</Text>
      <Box display="flex" alignItems="center" gap="1em">
        <Text>Size:</Text>
        <Box display="flex" alignItems="center" gap="5px">
          <Button onClick={() => handleSize(7)}>7</Button>
          <Button onClick={() => handleSize(8)}>8</Button>
          <Button onClick={() => handleSize(9)}>9</Button>
          <Button onClick={() => handleSize(10)}>10</Button>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap="1em">
        <Text>Colors:</Text>
        <Box display="flex" alignItems="center" gap="5px">
          {colors.map((item, idx) => {
            return (
              <Button
                bgColor={item}
                onClick={() => handleColor(item, idx)}
              ></Button>
            );
          })}
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
        onClick={handleSubmit}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default Card;

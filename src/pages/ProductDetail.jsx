import { Box, Image, Text, VStack, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$299", description: "A high-quality smartphone with a sleek design." },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$799", description: "A powerful laptop for all your computing needs." },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199", description: "Noise-cancelling headphones for an immersive experience." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Image src={product.image} alt={product.name} />
        <Text fontWeight="bold" fontSize="2xl">
          {product.name}
        </Text>
        <Text>{product.price}</Text>
        <Text>{product.description}</Text>
        <Button colorScheme="teal">Add to Cart</Button>
      </VStack>
    </Box>
  );
};

export default ProductDetail;
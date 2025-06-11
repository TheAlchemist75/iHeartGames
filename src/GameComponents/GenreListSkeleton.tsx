import { HStack, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY={2}>
      <Skeleton boxSize="35px" borderRadius="8px" />
      <Skeleton height="15px" width="100%" borderRadius="4px" />
    </HStack>
  );
};

export default GenreListSkeleton;

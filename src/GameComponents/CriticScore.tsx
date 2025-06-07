import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <>
      <Badge colorScheme={color} fontSize={"14px"} borderRadius={"4px"}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;

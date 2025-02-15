import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data: game, isLoading, error } = useGame(slug!);

  console.log(game);
  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{String(game?.description_raw || "")}</ExpandableText>
    </>
  );
};

export default GameDetailPage;

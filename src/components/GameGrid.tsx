import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount = data?.pages.reduce((total,page)=>total + page.results.length,0) || 0;

  return (
    <>
      {error && <Text>{error?.message}</Text>}
      <InfiniteScroll 
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={()=>fetchNextPage()}
        loader={<Spinner/>}
        >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={6}>
          {isLoading &&
            skeletons.map((Skeleton) => (
              <GameCardContainer key={Skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page?.results?.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      </> 
  );
}

export default GameGrid;

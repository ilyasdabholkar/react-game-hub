import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  const { data , isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (isLoading)
    return (
      <>
        <List>
          {skeletons.map((skeleton) => (
            <ListItem paddingY={"5px"} key={skeleton}>
              <HStack>
                <Skeleton boxSize={"32px"} />
                <Skeleton height={"25px"} width={"150px"} />
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={'3'}>Genres</Heading>
      <List>
        {data?.results?.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

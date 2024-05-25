import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

function GenreList() {
  const { data: genres, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading) return (
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
      <List>
        {genres.map((genre) => (
          <ListItem paddingY={'5px'} key={genre.id}>
            <HStack>
                <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;

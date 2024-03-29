import { Image } from "react-native";

const MoviePoster = ({ src }) => {
  return (
    <Image
      resizeMode="cover"
      source={{
        uri: `https://image.tmdb.org/t/p/w500${src}`,
      }}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default MoviePoster;

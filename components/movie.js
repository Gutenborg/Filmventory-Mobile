import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

import { MoviePoster } from "./";

const styles = StyleSheet.create({
  movieLink: {
    width: "50%",
  },
});

const Movie = ({ details }) => {
  return (
    <Link asChild href={`/details/${details.id}`}>
      <Pressable style={styles.movieLink}>
        <MoviePoster src={details.poster_path} />
      </Pressable>
    </Link>
  );
};

export default Movie;

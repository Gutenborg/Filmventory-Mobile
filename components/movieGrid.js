import { FlatList, StyleSheet, View } from "react-native";

import { Movie } from "./";

const styles = StyleSheet.create({
  movieGrid: {
    padding: 12,
  },
});

const MovieGrid = ({ movies }) => {
  return (
    <View style={styles.movieGrid}>
      <FlatList
        columnWrapperStyle={{
          gap: 12,
          marginVertical: 6,
          height: 280,
        }}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        data={movies}
        keyExtractor={(result) => result.id}
        numColumns={2}
        renderItem={({ item }) => <Movie details={item} />}
      />
    </View>
  );
};

export default MovieGrid;

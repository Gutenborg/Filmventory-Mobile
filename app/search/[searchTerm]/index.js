import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { MovieGrid, SearchInput } from "../../../components";
import { getSearchMovies } from "../../../constants";

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    textAlign: "center",
  },
});

const SearchPage = () => {
  const { searchTerm } = useLocalSearchParams();

  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["search-movies", searchTerm],
    queryFn: ({ queryKey }) => {
      return getSearchMovies(queryKey[1]);
    },
  });

  return (
    <SafeAreaView>
      <SearchInput />
      <Text style={styles.heading}>Search Results</Text>

      {isError && <Text>There was an error: {error.message}</Text>}

      {isLoading && <ActivityIndicator size="large" />}

      {isSuccess && <MovieGrid movies={data.results} />}
    </SafeAreaView>
  );
};

export default SearchPage;

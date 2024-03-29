import { ActivityIndicator, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { getPopularMovies } from "../constants";
import { MovieGrid } from "./";

const PopularMovies = () => {
  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => {
      return getPopularMovies();
    },
  });

  return (
    <View>
      {isError && <Text>There was an error: {error.message}</Text>}

      {isLoading && <ActivityIndicator size="large" />}

      {isSuccess && <MovieGrid movies={data.results} />}
    </View>
  );
};

export default PopularMovies;

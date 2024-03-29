import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { getMovieDetails } from "../../../constants";
import { CastAndCrew, MoviePoster } from "../../../components";

const styles = StyleSheet.create({
  castAndCrew: {
    display: "flex",
    flexDirection: "row",
  },
  castAndCrewSection: {
    flexBasis: "50%",
  },
  castAndCrewList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  heading: {
    fontSize: 32,
    textAlign: "center",
  },
  moviePoster: {
    height: 400,
    marginHorizontal: "10%",
    width: "80%",
  },
  wrapper: {
    gap: 12,
    padding: 12,
  },
});

const DetailsPage = () => {
  const { movieId } = useLocalSearchParams();

  const { data, error, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["movie-details", movieId],
    queryFn: ({ queryKey }) => {
      return getMovieDetails(queryKey[1]);
    },
  });

  return (
    <ScrollView>
      {isError && <Text>There was an error: {error.message}</Text>}

      {isLoading && <ActivityIndicator size="large" />}

      {isSuccess && (
        <View style={styles.wrapper}>
          <View style={styles.moviePoster}>
            <MoviePoster src={data.details.poster_path} />
          </View>

          <Text style={styles.heading}>{data.details.title}</Text>
          <Text>{data.details.overview}</Text>

          <View style={styles.castAndCrewSection}>
            <Text style={styles.heading}>Cast</Text>

            <View style={styles.castAndCrewList}>
              {data.credits.cast.map((castMember) => (
                <CastAndCrew
                  imageSrc={castMember.profile_path}
                  key={castMember.credit_id}
                  name={castMember.name}
                  role={castMember.character}
                />
              ))}
            </View>
          </View>

          <View style={styles.castAndCrewSection}>
            <Text style={styles.heading}>Crew</Text>

            <View style={styles.castAndCrewList}>
              {data.credits.crew.map((crewMember) => (
                <CastAndCrew
                  imageSrc={crewMember.profile_path}
                  key={crewMember.credit_id}
                  name={crewMember.name}
                  role={crewMember.job}
                />
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsPage;

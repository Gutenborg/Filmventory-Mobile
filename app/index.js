import { SafeAreaView, StyleSheet, Text } from "react-native";

import { PopularMovies, SearchInput } from "../components";

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    textAlign: "center",
  },
});

const Home = () => {
  return (
    <SafeAreaView>
      <SearchInput />
      <Text style={styles.heading}>Popular Movies</Text>
      <PopularMovies />
    </SafeAreaView>
  );
};

export default Home;

import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, router } from "expo-router";

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 2,
    flexGrow: 1,
    height: 40,
    padding: 10,
  },
  inputFocus: {
    borderColor: "black",
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    padding: 12,
  },
  searchButton: {
    backgroundColor: "rgb(2, 136, 209)",
    borderRadius: 4,
    flexShrink: 1,
    height: 40,
    padding: 10,
  },
  searchButtonDisabled: {
    backgroundColor: "rgb(153,207,236)",
  },
  searchButtonText: {
    color: "white",
  },
});

const SearchInput = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (searchTerm) => {
    router.navigate(`/search/${searchTerm}`);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        onBlur={() => setSearchFocus(false)}
        onChangeText={setSearchText}
        onFocus={() => setSearchFocus(true)}
        onSubmitEditing={() => handleSearch(searchText)}
        placeholder="Lookup a Movie:"
        style={searchFocus ? StyleSheet.flatten([styles.input, styles.inputFocus]) : styles.input}
        value={searchText}
      />

      <Pressable
        disabled={searchText.length < 1}
        onPress={() => handleSearch(searchText)}
        style={
          searchText.length < 1
            ? StyleSheet.flatten([styles.searchButton, styles.searchButtonDisabled])
            : styles.searchButton
        }
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchInput;

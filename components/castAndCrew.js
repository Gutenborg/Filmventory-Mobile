import { Image, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  role: {
    fontSize: 16,
    textAlign: "center",
  },
  wrapper: {
    flexBasis: "48%",
  },
});

const CastAndCrew = ({ imageSrc, name, role }) => {
  return (
    <View style={styles.wrapper}>
      <Image
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${imageSrc}`,
        }}
        style={{
          height: 280,
          width: "100%",
        }}
      />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

export default CastAndCrew;

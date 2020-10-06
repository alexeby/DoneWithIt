import React, { useEffect } from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Button from "../components/Button";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  useEffect(() => {
    loadListings(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0] != null ? item.images[0].url : null}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

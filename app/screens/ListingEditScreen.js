import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import CategoriesPickerItem from "../components/CategoriesPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          maxLength={8}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoriesPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          autoCapitalize="none"
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListingEditScreen;

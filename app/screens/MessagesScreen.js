import React, { useState } from "react";
import { FlatList } from "react-native";
import Screen from "../components/Screen";
import {
  ListItemSeparator,
  ListItemDeleteAction,
  ListItem,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title:
      "T1 sadf adf sadf asf sad fsd fa s efs fse fs fsefsefsef sf sf fs fse fse fse fs fsef sef sef ",
    description:
      "D1 sadf adf sadf asf sad fsd fa s efs fse fs fsefsefsef sf sf fs fse fse fse fs fsef sef sef",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title:
      "T2 sadf adf sadf asf sad fsd fa s efs fse fs fsefsefsef sf sf fs fse fse fse fs fsef sef sef",
    description:
      "D2 sadf adf sadf asf sad fsd fa s efs fse fs fsefsefsef sf sf fs fse fse fse fs fsef sef sef",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from initialMessages
    setMessages(messages.filter((m) => m.id !== message.id));
    // TODO Call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

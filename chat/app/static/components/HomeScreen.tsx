import { addChat, removeChat } from "@/app/core/store/chatSlice";
import { RootState } from "@/app/core/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { View, Text, Button, FlatList, TextInput } from "react-native";
import { HomeScreenNavigationProp } from "@/app/types/navigation";

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [newChat, setNewChat] = useState("");
  const chats = useSelector((state: RootState) => state.chat.chats);
  const dispatch = useDispatch();

  const handleAddChat = () => {
    if (newChat) {
      dispatch(addChat(newChat));
      setNewChat("");
    }
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Enter chat name"
        value={newChat}
        onChangeText={setNewChat}
      />
      <Button title="Add Chat" onPress={handleAddChat} />
      <FlatList
        data={chats}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Button
              title="Go to Chat"
              onPress={() => navigation.navigate("Chat", { chatName: item })}
            />
            <Button
              title="Delete Chat"
              onPress={() => dispatch(removeChat(item))}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

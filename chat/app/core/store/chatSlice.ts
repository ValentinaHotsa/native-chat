import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  chats: string[];
}

const initialState: ChatState = {
  chats: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state.chats.push(action.payload);
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter((chat) => chat !== action.payload);
    },
  },
});

export const { addChat, removeChat } = chatSlice.actions;
const chatReducer = chatSlice.reducer;
export default chatReducer;

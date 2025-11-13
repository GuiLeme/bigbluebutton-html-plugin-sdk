export const GET_CHATS_SUBSCRIPTION = `
  subscription PrivateChats {
    chat(where: {public: {_eq: false}}) {
      chatId
      participant {
        userId
        name
      }
    }
  }
`;

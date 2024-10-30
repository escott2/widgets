import { useState } from "react";
import { WidgetContainer } from "../../components/layout";
import styles from "./ChatWidget.module.scss";
import { chatQuestions, userInputDisplay } from "./data";

interface ChatTextObject {
  id: string;
  text: string;
  speakerType: "computer" | "user";
}

interface UserTextObject {
  id: string;
  text: string;
}

interface ChatWidgetProps {
  saveUsername: (name: string) => void;
}

function ChatWidget({ saveUsername }: ChatWidgetProps) {
  const [chatText, setChatText] = useState<ChatTextObject[]>([
    chatQuestions[0],
  ]);
  const [displayChat, setDisplayChat] = useState<boolean>(false);
  const [userText, setUserText] = useState<UserTextObject[]>();
  const [currentChatId, setCurrentChatId] = useState<number>(1);
  const [nameValue, setNameValue] = useState<string>("");

  console.log(chatText);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const displayInputTest = (currentChatId: number) => {
    switch (currentChatId) {
      case 1:
        return (
          <input type="text" value={nameValue} onChange={handleNameChange} />
        );
      case 2:
        return <input type="radio"></input>;
      // case 3:
      //   return <Error text={text} />
      default:
        return null;
    }
  };

  const handleChat = () => {
    // Create chat bubbles and append them to chat.
    // -- Chat bubble component with prop for message.
    // -- Apphend text to array. Map over array to display each chat bubble.
    // -- Array of objects with ids.
    setDisplayChat(true);
  };

  const addChatTextToConversation = (
    currentChatId: number,
    newChatId: number,
    name: string,
    userResponse: string
  ) => {
    const userChatObject: ChatTextObject = {
      id: `${currentChatId}-user`,
      text: userResponse,
      speakerType: "user",
    };

    setChatText((prevItems) => [...prevItems, userChatObject]);
    const newText = chatQuestions.find(
      (element) => `${newChatId}-computer` === element.id
    );
    if (newText) {
      const editedText = newText.text.replace("***000***", name);
      const newTextObject = { ...newText, text: editedText };
      setChatText((prevItems) => [...prevItems, newTextObject]);
    }
  };

  const handleSubmit = (currentChatId: number) => {
    switch (currentChatId) {
      case 1:
        saveUsername(nameValue);
        addChatTextToConversation(currentChatId, 2, nameValue, nameValue);
        setCurrentChatId(2);
        setNameValue("");
        break;
      // case 2:
      //   return <Warning} />
      // case 3:
      //   return <Error text={text} />
      default:
        return null;
    }
  };

  return (
    <WidgetContainer
      title="Water Cooler Chat"
      customClasses={styles.chatWidgetContainer}
    >
      <button onClick={handleChat}>Start Chat</button>

      {displayChat &&
        chatText.map((chatBubble) => {
          return <div key={chatBubble.id}>{chatBubble.text}</div>;
        })}

      {displayChat && displayInputTest(currentChatId)}
      <button onClick={() => handleSubmit(currentChatId)}>submit</button>
    </WidgetContainer>
  );
}

export default ChatWidget;

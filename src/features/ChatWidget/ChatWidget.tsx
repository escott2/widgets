import { useState } from "react";
import { WidgetContainer } from "../../components/layout";
import styles from "./ChatWidget.module.scss";
import { chatQuestions, userInputDisplay } from "./data";
import { isValidZipCode } from "../WidgetsForm/utils";

interface ChatTextObject {
  id: string;
  text: string;
  speakerType: "computer" | "user";
}

interface ChatWidgetProps {
  saveUsername: (name: string) => void;
}

function ChatWidget({ saveUsername }: ChatWidgetProps) {
  const [chatText, setChatText] = useState<ChatTextObject[]>([
    chatQuestions[0],
  ]);
  const [displayChat, setDisplayChat] = useState<boolean>(false);
  const [userResponse, setUserResponse] = useState<string>("");
  const [currentChatId, setCurrentChatId] = useState<number>(1);
  const [nextChatId, setNextChatId] = useState<number>(2);
  const [nameValue, setNameValue] = useState<string>("");
  const [zipCodeValue, setZipCodeValue] = useState<string>();

  console.log(chatText);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
    const transitionId = Number(e.target.dataset.transition);
    setNextChatId(transitionId);
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCodeValue(e.target.value);
    setUserResponse(e.target.value);
    const transitionId = Number(e.target.dataset.transition);
    setNextChatId(transitionId);
  };

  const displayInputTest = (currentChatId: number) => {
    switch (currentChatId) {
      case 1:
        return (
          <input type="text" value={nameValue} onChange={handleNameChange} />
        );
      case 2:
        return (
          <form>
            <div>
              {userInputDisplay[1].options &&
                userInputDisplay[1].options.map((option) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        id={option.id}
                        name="weather"
                        value={option.value}
                        onChange={handleOptionChange}
                        data-transition={option.transition}
                      />
                      <label htmlFor={option.value}>{option.value}</label>
                    </div>
                  );
                })}
            </div>
          </form>
        );
      case 6:
        return (
          <input
            type={userInputDisplay[2].inputType}
            value={zipCodeValue}
            onChange={handleZipCodeChange}
            data-transition={userInputDisplay[2].transition}
          />
        );

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
        addChatTextToConversation(
          currentChatId,
          nextChatId,
          nameValue,
          nameValue
        );
        setCurrentChatId(2);
        setNameValue("");
        break;
      case 2:
        addChatTextToConversation(
          currentChatId,
          nextChatId,
          nameValue,
          userResponse
        );
        setCurrentChatId(nextChatId);
        setUserResponse("");
        break;
      case 6:
        addChatTextToConversation(
          currentChatId,
          nextChatId,
          nameValue,
          userResponse
        );
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
      <div className={styles.chatHeader}>
        <div className={styles.chatInfo}>
          <div className={styles.circle}></div>
          <p>Emily</p>
        </div>
      </div>
      {!displayChat && <button onClick={handleChat}>Start Chat</button>}

      {displayChat &&
        chatText.map((chatBubble) => {
          return (
            <div key={chatBubble.id} className={styles[chatBubble.speakerType]}>
              {chatBubble.text}
            </div>
          );
        })}

      {displayChat && displayInputTest(currentChatId)}
      <button onClick={() => handleSubmit(currentChatId)}>submit</button>
    </WidgetContainer>
  );
}

export default ChatWidget;

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

interface UserInputObject {
  id: string;
  inputType: string;
  options:
    | {
        id: string;
        value: string;
        transition: string;
      }[]
    | null;
  transition: string | null;
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
  const [currentChatId, setCurrentChatId] = useState<string>("introduction");
  const [nextChatId, setNextChatId] = useState<string>("weather");
  const [nameValue, setNameValue] = useState<string>("");
  const [zipCodeValue, setZipCodeValue] = useState<string>();
  console.log(currentChatId);

  // chat flow
  // introduction
  // weather
  // -- weather-good
  // -- weather-bad
  // -- weather-okay
  // -- weather-unknown
  // weather-retrieve

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
    const transitionId = e.target.dataset.transition;
    transitionId && setNextChatId(transitionId);
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCodeValue(e.target.value);
    setUserResponse(e.target.value);
    const transitionId = e.target.dataset.transition;
    transitionId && setNextChatId(transitionId);
  };

  const displayInputTest = (currentChatId: string) => {
    switch (currentChatId) {
      case "introduction":
        return (
          <input type="text" value={nameValue} onChange={handleNameChange} />
        );
      case "weather":
        return (
          <form>
            <div>
              {userInputDisplay[1].options &&
                userInputDisplay[1].options.map((option) => {
                  return (
                    <fieldset>
                      <input
                        type="radio"
                        id={option.id}
                        name="weather"
                        value={option.value}
                        onChange={handleOptionChange}
                        data-transition={option.transition}
                      />
                      <label htmlFor={option.id}>{option.value}</label>
                    </fieldset>
                  );
                })}
            </div>
          </form>
        );
      case "weather-unknown":
        return (
          <input
            type={userInputDisplay[2].inputType}
            value={zipCodeValue}
            onChange={handleZipCodeChange}
            data-transition={userInputDisplay[2].transition}
          />
        );
      case "weather-good":
      case "weather-bad":
      case "weather-okay": {
        const targetInput: UserInputObject | undefined = userInputDisplay.find(
          (element) => "weather-convo-choice" === element.id
        );
        console.log(targetInput, "targetInput");
        console.log(targetInput?.options);

        if (targetInput?.options) {
          return targetInput.options
            ? targetInput.options.map((option) => {
                return (
                  <fieldset>
                    <input
                      type="radio"
                      id={option.id}
                      name="choice"
                      value={option.value}
                      // onChange={handleOptionChange}
                      data-transition={option.transition}
                    />
                    <label htmlFor={option.id}>{option.value}</label>
                  </fieldset>
                );
              })
            : null;
        }
        break;
      }
      default:
        return null;
    }
  };

  const handleChat = () => {
    setDisplayChat(true);
  };

  const addChatTextToConversation = (
    currentChatId: string,
    newChatId: string,
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

  const handleSubmit = (currentChatId: string) => {
    switch (currentChatId) {
      case "introduction":
        saveUsername(nameValue);
        addChatTextToConversation(
          currentChatId,
          nextChatId,
          nameValue,
          nameValue
        );
        setCurrentChatId("weather");
        setNameValue("");
        break;
      case "weather":
        addChatTextToConversation(
          currentChatId,
          nextChatId,
          nameValue,
          userResponse
        );
        setCurrentChatId(nextChatId);
        setUserResponse("");
        break;
      case "find-weather":
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

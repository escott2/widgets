import { useState, useRef, useEffect } from "react";
import { WidgetContainer } from "../../components/layout";
import styles from "./ChatWidget.module.scss";
import { chatQuestions, userInputDisplay } from "./data";
import { BaseButton } from "../../components/ui/Button";
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
        checked: boolean;
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
  const [chatError, setChatError] = useState<string>("");

  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [chatText]);

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

  const isOptionSelected = (userResponse: string): boolean => {
    if (userResponse) {
      return true;
    } else {
      return false;
    }
  };

  const renderWeatherChoice = (userInputDisplay: UserInputObject[]) => {
    const targetInput: UserInputObject | undefined = userInputDisplay.find(
      (element) => "weather-convo-choice" === element.id
    );
    console.log(targetInput);
    console.log(targetInput?.options);
    if (targetInput?.options) {
      return (
        <div className={styles.responseContainer}>
          {targetInput.options.map((option) => {
            return (
              <fieldset className={styles.weatherResponseOptions}>
                <input
                  type="radio"
                  id={option.id}
                  name="weather-convo-choice-options"
                  value={option.value}
                  onChange={handleOptionChange}
                  data-transition={option.transition}
                  className={styles.visuallyHidden}
                  checked={userResponse === option.value}
                />
                <label htmlFor={option.id} className={styles.radioLabel}>
                  {option.value}
                </label>
              </fieldset>
            );
          })}
        </div>
      );
    } else {
      return <p>N/A</p>;
    }
  };

  const renderTest = () => {
    return <p>test</p>;
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
          <input
            className={styles.textInput}
            type="text"
            value={nameValue}
            onChange={handleNameChange}
          />
        );
      case "weather":
        return (
          <div className={styles.responseContainer}>
            {userInputDisplay[1].options &&
              userInputDisplay[1].options.map((option) => {
                return (
                  <fieldset className={styles.weatherResponseOptions}>
                    <input
                      type="radio"
                      id={option.id}
                      name="weather"
                      value={option.value}
                      onChange={handleOptionChange}
                      data-transition={option.transition}
                      checked={userResponse === option.value}
                      className={styles.visuallyHidden}
                    />
                    <label htmlFor={option.id} className={styles.radioLabel}>
                      {option.value}
                    </label>
                  </fieldset>
                );
              })}
          </div>
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
        return renderWeatherChoice(userInputDisplay);
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

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentChatId: string
  ) => {
    switch (currentChatId) {
      case "introduction":
        e.preventDefault();
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
        e.preventDefault();
        if (isOptionSelected(userResponse)) {
          setChatError("");
          addChatTextToConversation(
            currentChatId,
            nextChatId,
            nameValue,
            userResponse
          );
          setCurrentChatId(nextChatId);
          setUserResponse("");
        } else {
          setChatError("Please select a response");
        }

        break;
      case "find-weather":
        e.preventDefault();
        addChatTextToConversation(
          currentChatId,
          nextChatId,
          nameValue,
          userResponse
        );
        break;
      case "weather-good":
      case "weather-bad":
      case "weather-okay":
        e.preventDefault();
        if (isOptionSelected(userResponse)) {
          setChatError("");
          addChatTextToConversation(
            currentChatId,
            nextChatId,
            nameValue,
            userResponse
          );
          setCurrentChatId(nextChatId);
          setUserResponse("");
        } else {
          setChatError("Please select a response");
        }
        break;
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

      {!displayChat && (
        <BaseButton onClick={handleChat} customClasses={styles.startChatButton}>
          Start Chat
        </BaseButton>
      )}

      {displayChat && (
        <>
          <div className={styles.dialogContainer} ref={scrollableRef}>
            <div className={styles.dialog}>
              {displayChat &&
                chatText.map((chatBubble) => {
                  return (
                    <div
                      key={chatBubble.id}
                      className={styles[chatBubble.speakerType]}
                    >
                      {chatBubble.text}
                    </div>
                  );
                })}
            </div>
          </div>

          {chatError && <p className={styles.chatError}>{chatError}</p>}
          <div className={styles.submitContainer}>
            <form className={styles.submitForm}>
              {displayInputTest(currentChatId)}
              <BaseButton
                customClasses={styles.submitButton}
                onClick={(e) => handleSubmit(e, currentChatId)}
              >
                Submit
              </BaseButton>
            </form>
          </div>
        </>
      )}
    </WidgetContainer>
  );
}

export default ChatWidget;

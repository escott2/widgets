import { useState, useRef, useEffect } from "react";
import { WidgetContainer } from "../../components/layout";
import styles from "./ChatWidget.module.scss";
import { chatQuestions, userInputDisplay } from "./data";
import { PrimaryButton } from "../../components/ui/Button";
import { UserResponseRadioButton } from "./components";
import { ChatTextObject, UserInputObject } from "./types";
import TypingAnimation from "../../components/animation/TypingAnimation";

interface ChatWidgetProps {
  saveUsername: (name: string) => void;
  name: string;
}

function ChatWidget({ saveUsername, name }: ChatWidgetProps) {
  const [chatText, setChatText] = useState<ChatTextObject[]>([
    chatQuestions[0],
  ]);
  const [displayChat, setDisplayChat] = useState<boolean>(false);
  const [userResponse, setUserResponse] = useState<string>("");
  const [currentChatId, setCurrentChatId] = useState<string>("introduction");
  const [nextChatId, setNextChatId] = useState<string>("weather");
  const [nameValue, setNameValue] = useState<string>("");
  const [chatError, setChatError] = useState<string>("");
  const [isChatOver, setIsChatOver] = useState<boolean>(false);

  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [chatText]);

  function validateInputValue(value: string) {
    const trimmedValue = value.trim();

    if (trimmedValue === "") {
      return false;
    } else {
      return true;
    }
  }

  const handleRestartChat = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsChatOver(false);
    setCurrentChatId("introduction");
    setNextChatId("weather");
    setChatText([chatQuestions[0]]);
  };

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

  const renderRadioButtons = (
    userInputDisplay: UserInputObject[],
    id: string
  ) => {
    const targetInput: UserInputObject | undefined = userInputDisplay.find(
      (element) => id === element.id
    );
    if (targetInput?.options) {
      return (
        <>
          {targetInput.options.map((option) => {
            return (
              <UserResponseRadioButton
                option={option}
                isChecked={userResponse === option.value}
                handleOptionChange={handleOptionChange}
              />
            );
          })}
        </>
      );
    } else {
      return <p>N/A</p>;
    }
  };

  const displayInputTest = (currentChatId: string) => {
    switch (currentChatId) {
      case "introduction":
        return (
          <input
            className={styles.textInput}
            type="textbox"
            value={nameValue}
            onChange={handleNameChange}
          />
        );
      case "weather":
        return renderRadioButtons(userInputDisplay, "weather");
      case "weather-good":
      case "weather-bad":
      case "weather-okay":
      case "weather-unknown": {
        return renderRadioButtons(userInputDisplay, "weather-convo-choice");
        break;
      }
      case "weather-convo-continue":
        return renderRadioButtons(userInputDisplay, "weather-convo-continue");
        break;
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
      console.log("reached new text, checking name", name);
      const editedText = newText.text.replace("***000***", name);
      const newTextObject = { ...newText, text: editedText };
      setChatText((prevItems) => [...prevItems, newTextObject]);
    } else {
      setIsChatOver(true);
    }
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    currentChatId: string
  ) => {
    switch (currentChatId) {
      case "introduction":
        e.preventDefault();
        if (validateInputValue(nameValue)) {
          setChatError("");
          saveUsername(nameValue);
          addChatTextToConversation(
            currentChatId,
            nextChatId,
            nameValue,
            nameValue
          );
          setCurrentChatId("weather");
          setNameValue("");
        } else {
          setChatError("Please enter your name.");
          setNameValue("");
        }
        break;
      case "weather":
        e.preventDefault();
        if (isOptionSelected(userResponse)) {
          setChatError("");
          addChatTextToConversation(
            currentChatId,
            nextChatId,
            name,
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
          name,
          userResponse
        );
        break;
      case "weather-good":
      case "weather-bad":
      case "weather-okay":
      case "weather-unknown":
        e.preventDefault();
        if (isOptionSelected(userResponse)) {
          setChatError("");
          addChatTextToConversation(
            currentChatId,
            nextChatId,
            name,
            userResponse
          );
          setCurrentChatId(nextChatId);
          setUserResponse("");
        } else {
          setChatError("Please select a response");
        }
        break;
      case "weather-convo-continue":
        e.preventDefault();
        if (isOptionSelected(userResponse)) {
          setChatError("");
          addChatTextToConversation(
            currentChatId,
            nextChatId,
            name,
            userResponse
          );
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
        {displayChat ? (
          <div className={styles.chatInfo}>
            <div className={styles.circle}></div>
            <p>Emily</p>
          </div>
        ) : (
          <p>
            You're working hard today — time for a water break! Join me at the
            virtual office water cooler for a simulated chat.
          </p>
        )}
      </div>

      {!displayChat && (
        <div className={styles.preChatContainer}>
          <PrimaryButton
            onClick={handleChat}
            customClasses={styles.enterChatButton}
          >
            Enter Chat
          </PrimaryButton>
        </div>
      )}

      {displayChat && (
        <>
          <div className={styles.dialogContainer} ref={scrollableRef}>
            <div className={styles.dialog}>
              {displayChat &&
                chatText.map((chatBubble) => {
                  if (chatBubble.id === `${currentChatId}-computer`) {
                    return (
                      <TypingAnimation
                        key={chatBubble.id}
                        customClasses={styles[chatBubble.speakerType]}
                        text={chatBubble.text}
                      />
                    );
                  }
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
            {isChatOver && <p className={styles.chatEndMessage}>Chat ended</p>}
          </div>

          <div className={styles.submitContainer}>
            <form className={styles.submitForm}>
              <div className={styles.responseContainer}>
                {displayInputTest &&
                  !isChatOver &&
                  displayInputTest(currentChatId)}
              </div>

              <p className={styles.chatError}>{chatError && chatError}</p>
              {isChatOver ? (
                <PrimaryButton
                  customClasses={styles.restartButton}
                  onClick={handleRestartChat}
                >
                  Restart Chat
                </PrimaryButton>
              ) : (
                <PrimaryButton
                  customClasses={styles.submitButton}
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => handleSubmit(e, currentChatId)}
                >
                  Submit
                </PrimaryButton>
              )}
            </form>
          </div>
        </>
      )}
    </WidgetContainer>
  );
}

export default ChatWidget;

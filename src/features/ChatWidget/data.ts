import { UserInputObject, ChatTextObject } from "./types";

// chat flow
// introduction
// weather
// -- weather-good
// -- weather-bad
// -- weather-okay
// -- weather-unknown
// weather-retrieve

const chatQuestions: ChatTextObject[] = [
  {
    id: "introduction-computer",
    text: "Hello, I don't think we've met before. I'm Emily, what's your name?",
    speakerType: "computer",
  },
  {
    id: "weather-computer",
    text: "Nice to meet you ***000***! How's the weather looking your way?",
    speakerType: "computer",
  },
  {
    id: "weather-good-computer",
    text: "That's wonderful!",
    speakerType: "computer",
  },
  {
    id: "weather-bad-computer",
    text: "That's too bad. I suppose it's a good day to enjoy the great indoors.",
    speakerType: "computer",
  },
  {
    id: "weather-okay-computer",
    text: "Ah yes, mediocre weather indeed.",
    speakerType: "computer",
  },
  {
    id: "weather-unknown-computer",
    text: "I created a weather widget. Feel free to give it a try if you're interested in checking your current weather!",
    speakerType: "computer",
  },
  {
    id: "weather-convo-continue-computer",
    text: "Sun's shining, birds are singing, but my break's ending. Nice to meet you, ***000***!",
    speakerType: "computer",
  },
];

const userInputDisplay: UserInputObject[] = [
  {
    id: "introduction",
    inputType: "text",
    options: null,
    transition: "weather",
  },
  {
    id: "weather",
    inputType: "radio",
    options: [
      {
        id: "nice",
        value: "The weather is nice!",
        transition: "weather-good",
        checked: true,
      },
      {
        id: "bad",
        value: "The weather is not very nice!",
        transition: "weather-bad",
        checked: false,
      },
      {
        id: "okay",
        value: "The weather is okay.",
        transition: "weather-okay",
        checked: false,
      },
      {
        id: "unknown",
        value: "I haven't checked the weather yet.",
        transition: "weather-unknown",
        checked: false,
      },
    ],
    transition: null,
  },
  {
    id: "weather-convo-choice",
    inputType: "radio",
    options: [
      {
        id: "weather-convo-choice-ask",
        value: "What's the weather like where you are?",
        transition: "weather-convo-continue",
        checked: true,
      },
      {
        id: "weather-convo-choice-end",
        value:
          "Look at the time! I should get back to work. It was nice talking to you.",
        transition: "conversation-ended",
        checked: false,
      },
    ],
    transition: null,
  },
  {
    id: "weather-convo-continue",
    inputType: "radio",
    options: [
      {
        id: "goodbye",
        value: "Bye!",
        transition: "conversation-ended",
        checked: true,
      },
      {
        id: "see-you",
        value: "Talk to you later!",
        transition: "conversation-ended",
        checked: false,
      },
    ],
    transition: null,
  },
];

export { chatQuestions, userInputDisplay };

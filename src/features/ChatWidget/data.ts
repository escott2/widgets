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
    text: "That's great!",
    speakerType: "computer",
  },
  {
    id: "weather-bad-computer",
    text: "That's too bad.",
    speakerType: "computer",
  },
  {
    id: "weather-okay-computer",
    text: "I understand that. It's not the best and not the worst. Maybe it will get nicer soon.",
    speakerType: "computer",
  },
  {
    id: "weather-unknown-computer",
    text: "I can help you figure that out! What's your zip code?",
    speakerType: "computer",
  },
  {
    id: "weather-retrieve-computer",
    text: "Hold on one moment....",
    speakerType: "computer",
  },
  {
    id: "weather-retrieve-computer",
    text: "Hold on one moment....",
    speakerType: "computer",
  },
  {
    id: "weather-convo-continue-computer",
    text: "Let me see....",
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
        transition: "weather-convo-end",
        checked: false,
      },
    ],
    transition: null,
  },
  {
    id: "weather-unknown",
    inputType: "text",
    options: null,
    transition: "weather-retrieve",
  },
];

export { chatQuestions, userInputDisplay };

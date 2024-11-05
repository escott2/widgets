const intro = "Hello! My name is Emily, have we met before? What's your name?";
// user enters name - name is stored in state
("Hi John, nice to meet you. How about the weather today?");
// options - I don't know about the weather today (response - I can look that up for you, what's your zip code") user - (no thanks | text input for zip code) - response (That's okay... well I think I am going to get back to my desk, I hope you have a nice day! | After data fetches highlight weather widget - here is your weather...)

interface ChatTextObject {
  id: string;
  text: string;
  speakerType: "computer" | "user";
}

const chatQuestions: ChatTextObject[] = [
  {
    id: "1-computer",
    text: "Hello, I don't think we've met before. I'm Emily, what's your name?",
    speakerType: "computer",
  },
  {
    id: "2-computer",
    text: "Nice to meet you ***000***! How about the weather today?",
    speakerType: "computer",
  },
  {
    id: "3-computer",
    text: "That's great! I have to get back to my desk.",
    speakerType: "computer",
  },
  {
    id: "4-computer",
    text: "That's too bad. I have to get back to my desk.",
    speakerType: "computer",
  },
  {
    id: "5-computer",
    text: "Yeah. I have to get back to my desk.",
    speakerType: "computer",
  },
  {
    id: "6-computer",
    text: "I can help you figure that out! What's your zip code?",
    speakerType: "computer",
  },
  {
    id: "7-computer",
    text: "Hold on one moment....",
    speakerType: "computer",
  },
];

const userInputDisplay = [
  {
    id: 1,
    inputType: "text",
    options: null,
    transition: 2,
  },
  {
    id: 2,
    inputType: "radio",
    options: [
      {
        id: "nice",
        value: "The weather is nice test!",
        transition: 3,
      },
      {
        id: "bad",
        value: "The weather is bad!",
        transition: 4,
      },
      {
        id: "okay",
        value: "The weather is okay",
        transition: 5,
      },
      {
        id: "unknown",
        value: "I don't know what the weather is like right now.",
        transition: 6,
      },
    ],
    transition: null,
  },
  {
    id: 6,
    inputType: "text",
    options: null,
    transition: 7,
  },
];

export { chatQuestions, userInputDisplay };

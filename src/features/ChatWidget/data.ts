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
    text: "Hello! My name is Emily, have we met before? What's your name?",
    speakerType: "computer",
  },
  {
    id: "2-computer",
    text: "Hi. Nice to meet you ***000***. How about the weather today?",
    speakerType: "computer",
  },
];

const userInputDisplay = [
  {
    id: 1,
    inputType: "text",
    options: null,
  },
  {
    id: 2,
    inputType: "select",
    options: [
      "I don't know about the weather today",
      "It's nice!",
      "It's extreme",
      "I don't like to talk about the weather",
    ],
  },
];

export { chatQuestions, userInputDisplay };

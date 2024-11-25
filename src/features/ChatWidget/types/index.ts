export interface UserInputObject {
  id: string;
  inputType: string;
  options: UserInputOption[] | null;
  transition: string | null;
}

export interface UserInputOption {
  id: string;
  value: string;
  transition: string | null;
  checked: boolean;
}

export interface ChatTextObject {
  id: string;
  text: string;
  speakerType: "computer" | "user";
}

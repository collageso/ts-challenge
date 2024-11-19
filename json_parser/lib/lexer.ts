type TokenType =
  | "BraceOpen"
  | "BraceClose"
  | "BracketOpen"
  | "BracketClose"
  | "Comma"
  | "Colon"
  | "Null"
  | "True"
  | "False"
  | "Number"
  | "String";

type Token = {
  type: TokenType;
  value: string;
};

type TokenType =
  | "LeftBrace"
  | "RightBrace"
  | "LeftBracket"
  | "RightBracket"
  | "String"
  | "Number"
  | "Comma"
  | "Colon"
  | "True"
  | "False"
  | "Null";

type Token = {
  type: TokenType;
  value: string;
};

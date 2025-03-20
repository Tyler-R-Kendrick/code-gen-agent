/**
 * Type definitions for the LexerBuilder module
 */

export interface TokenRule {
  name: string;
  pattern: RegExp;
  action?: (match: string) => any;
}

export interface LexerOptions {
  ignoreWhitespace?: boolean;
  caseSensitive?: boolean;
}

export interface Token {
  type: string;
  value: string;
  line: number;
  column: number;
}

export interface Lexer {
  tokenize(input: string): Token[];
}
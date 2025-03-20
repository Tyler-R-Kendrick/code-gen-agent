/**
 * Type definitions for the ParserBuilder module
 */

import { Token } from '../LexerBuilder/types';

export interface Production {
  name: string;
  symbols: string[];
  action?: (args: any[]) => any;
}

export interface GrammarRule {
  name: string;
  productions: Production[];
}

export interface ParserOptions {
  startSymbol: string;
  errorRecovery?: boolean;
}

export interface SyntaxNode {
  type: string;
  value?: any;
  children?: SyntaxNode[];
}

export interface Parser {
  parse(tokens: Token[]): SyntaxNode;
}
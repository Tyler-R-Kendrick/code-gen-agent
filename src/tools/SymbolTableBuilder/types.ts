/**
 * Type definitions for the SymbolTableBuilder module
 */

import { SyntaxNode } from '../ParserBuilder/types';

export interface Symbol {
  name: string;
  type: string;
  scope: string;
  line: number;
  column: number;
  metadata?: Record<string, any>;
}

export interface Scope {
  name: string;
  parent?: string;
  symbols: Map<string, Symbol>;
}

export interface SymbolTable {
  addSymbol(symbol: Symbol): void;
  getSymbol(name: string, scope?: string): Symbol | undefined;
  enterScope(name: string, parent?: string): void;
  exitScope(): void;
  getCurrentScope(): string;
}

export interface SymbolTableBuilderOptions {
  resolveTypes?: boolean;
  trackUsages?: boolean;
}
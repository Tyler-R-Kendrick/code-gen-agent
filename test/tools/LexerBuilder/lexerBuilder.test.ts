import { LexerBuilder, TokenRule, LexerOptions } from '../../../src/tools/LexerBuilder';

describe('LexerBuilder', () => {
  let lexerBuilder: LexerBuilder;

  beforeEach(() => {
    lexerBuilder = new LexerBuilder();
  });

  test('should create an instance of LexerBuilder', () => {
    expect(lexerBuilder).toBeInstanceOf(LexerBuilder);
  });

  test('should build a lexer from rules', () => {
    const rules: TokenRule[] = [
      { name: 'NUMBER', pattern: /\d+/ },
      { name: 'PLUS', pattern: /\+/ },
      { name: 'MINUS', pattern: /\-/ },
    ];

    const options: LexerOptions = {
      ignoreWhitespace: true
    };

    const lexer = lexerBuilder.buildLexer(rules);
    expect(lexer).toBeDefined();
  });
});
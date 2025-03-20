import { ParserBuilder } from '../../../src/tools/ParserBuilder';
import { GrammarRule, ParserOptions } from '../../../src/tools/ParserBuilder/types';

describe('ParserBuilder', () => {
  let parserBuilder: ParserBuilder;

  beforeEach(() => {
    parserBuilder = new ParserBuilder();
  });

  test('should create an instance of ParserBuilder', () => {
    expect(parserBuilder).toBeInstanceOf(ParserBuilder);
  });

  test('should build a parser from grammar rules', () => {
    const rules: GrammarRule[] = [
      {
        name: 'expression',
        productions: [
          {
            name: 'addition',
            symbols: ['term', 'PLUS', 'expression'],
            action: (args) => ({ type: 'addition', left: args[0], right: args[2] })
          },
          {
            name: 'term',
            symbols: ['term'],
            action: (args) => args[0]
          }
        ]
      },
      {
        name: 'term',
        productions: [
          {
            name: 'number',
            symbols: ['NUMBER'],
            action: (args) => ({ type: 'number', value: args[0] })
          }
        ]
      }
    ];

    const options: ParserOptions = {
      startSymbol: 'expression'
    };

    const parser = parserBuilder.buildParser(rules);
    expect(parser).toBeDefined();
  });
});
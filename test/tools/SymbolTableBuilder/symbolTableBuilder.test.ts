import { SymbolTableBuilder } from '../../../src/tools/SymbolTableBuilder';
import { SyntaxNode } from '../../../src/tools/ParserBuilder/types';
import { SymbolTableBuilderOptions } from '../../../src/tools/SymbolTableBuilder/types';

describe('SymbolTableBuilder', () => {
  let symbolTableBuilder: SymbolTableBuilder;

  beforeEach(() => {
    symbolTableBuilder = new SymbolTableBuilder();
  });

  test('should create an instance of SymbolTableBuilder', () => {
    expect(symbolTableBuilder).toBeInstanceOf(SymbolTableBuilder);
  });

  test('should build a symbol table from an AST', () => {
    const ast: SyntaxNode = {
      type: 'program',
      children: [
        {
          type: 'variableDeclaration',
          value: {
            name: 'counter',
            type: 'number',
            line: 1,
            column: 5
          }
        },
        {
          type: 'functionDeclaration',
          value: {
            name: 'increment',
            returnType: 'number',
            line: 3,
            column: 1
          },
          children: [
            {
              type: 'parameter',
              value: {
                name: 'value',
                type: 'number',
                line: 3,
                column: 15
              }
            }
          ]
        }
      ]
    };

    const options: SymbolTableBuilderOptions = {
      resolveTypes: true
    };

    const symbolTable = symbolTableBuilder.buildSymbolTable(ast);
    expect(symbolTable).toBeDefined();
  });
});
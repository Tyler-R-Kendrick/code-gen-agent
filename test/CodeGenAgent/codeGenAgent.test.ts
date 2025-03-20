import { CodeGenAgent } from '../../src/CodeGenAgent';
import { CodeGenConfig, CodeGenModel, Entity } from '../../src/CodeGenAgent/types';

describe('CodeGenAgent', () => {
  let codeGenAgent: CodeGenAgent;

  beforeEach(() => {
    codeGenAgent = new CodeGenAgent();
  });

  test('should create an instance of CodeGenAgent', () => {
    expect(codeGenAgent).toBeInstanceOf(CodeGenAgent);
  });

  test('should generate code based on a specification', () => {
    const entity: Entity = {
      name: 'User',
      properties: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'createdAt', type: 'Date' }
      ],
      methods: [
        {
          name: 'getFullName',
          returnType: 'string',
          parameters: [],
          visibility: 'public'
        }
      ]
    };

    const model: CodeGenModel = {
      entities: [entity],
      relationships: []
    };

    const config: CodeGenConfig = {
      language: 'typescript',
      outputPath: './generated'
    };

    const spec = { model, config };
    const result = codeGenAgent.generateCode(spec);
    
    expect(result).toBeDefined();
  });
});
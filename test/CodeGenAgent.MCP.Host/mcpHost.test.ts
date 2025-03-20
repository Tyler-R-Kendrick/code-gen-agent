import { MCPHost } from '../../src/CodeGenAgent.MCP.Host';
import { MCPRequest, MCPResponse } from '../../src/CodeGenAgent.MCP.Host/types';

describe('MCPHost', () => {
  let mcpHost: MCPHost;

  beforeEach(() => {
    mcpHost = new MCPHost();
  });

  test('should create an instance of MCPHost', () => {
    expect(mcpHost).toBeInstanceOf(MCPHost);
  });

  test('should start and stop the host service', async () => {
    // Mocking console.log to verify it's called
    const consoleSpy = jest.spyOn(console, 'log');
    
    await mcpHost.start(4000);
    expect(consoleSpy).toHaveBeenCalledWith('MCP Host starting on port 4000');
    
    await mcpHost.stop();
    expect(consoleSpy).toHaveBeenCalledWith('MCP Host stopping');
    
    consoleSpy.mockRestore();
  });

  test('should process a code generation request', () => {
    const request: MCPRequest = {
      id: '1234-5678',
      timestamp: Date.now(),
      config: {
        language: 'typescript',
        outputPath: './generated'
      },
      model: {
        entities: [
          {
            name: 'Product',
            properties: [
              { name: 'id', type: 'number' },
              { name: 'name', type: 'string' },
              { name: 'price', type: 'number' }
            ]
          }
        ],
        relationships: []
      }
    };
    
    const result = mcpHost.processRequest(request);
    expect(result).toBeDefined();
  });
});
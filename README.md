# CodeGenAgent

A TypeScript-based code generation agent with modular architecture for lexing, parsing, symbol table management, and code generation.

## Project Structure

```
code-gen-agent/
├── src/                     # Source code
│   ├── tools/               # Tooling modules
│   │   ├── LexerBuilder/    # Lexical analysis tools
│   │   ├── ParserBuilder/   # Parsing/grammar tools
│   │   └── SymbolTableBuilder/ # Symbol management tools
│   ├── CodeGenAgent/        # Main code generation logic
│   └── CodeGenAgent.MCP.Host/ # MCP Host application
├── test/                    # Test files matching src structure
│   ├── tools/
│   │   ├── LexerBuilder/
│   │   ├── ParserBuilder/
│   │   └── SymbolTableBuilder/
│   ├── CodeGenAgent/
│   └── CodeGenAgent.MCP.Host/
├── dist/                    # Compiled output (generated)
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── jest.config.js           # Test configuration
```

## Modules

- **LexerBuilder**: Builds lexical analyzers for processing input text into tokens
- **ParserBuilder**: Constructs parsers to process tokens into abstract syntax trees
- **SymbolTableBuilder**: Creates and manages symbol tables for tracking identifiers
- **CodeGenAgent**: Main code generation engine that uses the tools to generate code
- **CodeGenAgent.MCP.Host**: Host application for running the agent in an MCP environment

## Getting Started

### Prerequisites

- Node.js 16 or later
- npm 8 or later

### Installation

```bash
git clone https://github.com/your-org/code-gen-agent.git
cd code-gen-agent
npm install
```

### Build

```bash
npm run build
```

### Run Tests

Run all tests:
```bash
npm test
```

Run specific module tests:
```bash
npm run test:lexer
npm run test:parser
npm run test:symboltable
npm run test:codegenagent
npm run test:mcp
```

## License

ISC

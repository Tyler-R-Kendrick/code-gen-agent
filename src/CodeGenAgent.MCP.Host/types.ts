/**
 * Type definitions for the CodeGenAgent.MCP.Host module
 */

import { CodeGenConfig, CodeGenModel } from '../CodeGenAgent/types';

export interface MCPRequest {
  id: string;
  timestamp: number;
  config: CodeGenConfig;
  model: CodeGenModel;
}

export interface MCPResponse {
  id: string;
  success: boolean;
  timestamp: number;
  generatedCode?: string;
  error?: string;
}

export interface MCPHostConfig {
  port?: number;
  host?: string;
  logLevel?: 'debug' | 'info' | 'warn' | 'error';
  cors?: boolean;
}

export interface MCPHostStatus {
  running: boolean;
  uptime: number;
  requestsProcessed: number;
  lastRequest?: string;
}
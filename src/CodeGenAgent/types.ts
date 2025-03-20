/**
 * Type definitions for the CodeGenAgent module
 */

export interface CodeGenConfig {
  language: string;
  outputPath?: string;
  templatePath?: string;
  options?: Record<string, any>;
}

export interface CodeGenModel {
  entities: Entity[];
  relationships: Relationship[];
}

export interface Entity {
  name: string;
  properties: Property[];
  methods?: Method[];
}

export interface Property {
  name: string;
  type: string;
  visibility?: 'public' | 'protected' | 'private';
  defaultValue?: any;
}

export interface Method {
  name: string;
  returnType: string;
  parameters: Parameter[];
  visibility?: 'public' | 'protected' | 'private';
  body?: string;
}

export interface Parameter {
  name: string;
  type: string;
  defaultValue?: any;
}

export interface Relationship {
  type: 'oneToOne' | 'oneToMany' | 'manyToOne' | 'manyToMany';
  source: string;
  target: string;
  sourceProperty?: string;
  targetProperty?: string;
}
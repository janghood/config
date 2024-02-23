/**
 * @description vscode vetur component data
 * @author youus
 * @date 2024/2/23 23:49
 * @version v1.0.0
 *
 * Hello, humor
 */
import { BaseDocumentOption } from './common';

export declare type VscodeOption = {
  /**
   * @description package.json path , to set name and version
   * @type string
   * @default 'package.json'
   */
  packageUrl?: string,
} & BaseDocumentOption;

export type VeturAttribute = {
  default: string
  description: string
  type: string
  options?: string[]
}

export type VeturAttributes = {
  [key: string]: VeturAttribute
}

export type VeturTag = {
  attributes: string[]
  description: string
}

export type VeturTags = {
  [key: string]: VeturTag
}



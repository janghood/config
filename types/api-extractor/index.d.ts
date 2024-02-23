/**
 * @description api-extractor type index
 * @author 阿怪
 * @date 2022/11/17 02:57
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { WebTypeOption } from './web-type';
import { MarkdownOption } from './markdown';
import { VscodeOption } from './vscode';

export declare type Doc = Record<string, string>;
export type Documents = {
  webTypes?: WebTypeOption,
  markdown?: MarkdownOption
  vscode?: VscodeOption
}
export * from './web-type';
export * from './markdown';
export * from './vscode';
export * from './apiExtractor';

/**
 * @description base config type
 * @author 阿怪
 * @date 2022/4/6 3:37 PM
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { ApiExtractorType } from './api-extractor';
import { InOrExclude } from './common/InOrExclude';
import { WithEmptyBoolean } from './common/tools';
import { LintDefineType, LintType } from './lint';

export * from './api-extractor';
export * from './lint';

export type BaseConfig = InOrExclude;


export interface JanghoodDefineConfig {
  base?: BaseConfig,
  apiExtractor?: WithEmptyBoolean<ApiExtractorType>,
  lint?: LintDefineType
}

export interface JanghoodConfig {
  base?: BaseConfig,
  apiExtractor?: ApiExtractorType,
  lint?: LintType
}

export type JanghoodConfigFn = (config?: JanghoodDefineConfig) => JanghoodDefineConfig | Promise<JanghoodDefineConfig>;
export type JanghoodConfigExport = JanghoodDefineConfig | Promise<JanghoodDefineConfig> | JanghoodConfigFn;

export declare function defineJhConfig(config?: JanghoodDefineConfig): JanghoodConfigExport;

export declare function initConfig(config?: JanghoodDefineConfig): JanghoodConfig | undefined;

export declare function loadJanghoodConfig(configFile?: string, configRoot?: string): Promise<{ path: string, config: JanghoodDefineConfig, dependencies: string[] } | null>;

export declare function validateDocumentConfig(config: JanghoodDefineConfig, documentName: string): boolean | undefined;




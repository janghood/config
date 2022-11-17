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

export * from './api-extractor';

export type BaseConfig = InOrExclude;


export interface JanghoodConfig {
  base?: BaseConfig,
  apiExtractor?: WithEmptyBoolean<ApiExtractorType>;
}

export type JanghoodConfigFn = (config?: JanghoodConfig) => JanghoodConfig | Promise<JanghoodConfig>;
export type JanghoodConfigExport = JanghoodConfig | Promise<JanghoodConfig> | JanghoodConfigFn;

export declare function defineJhConfig(config?: JanghoodConfig): JanghoodConfigExport;

export declare function loadJanghoodConfig(configFile?: string, configRoot?: string): Promise<{ path: string, config: JanghoodConfig, dependencies: string[] } | null>;

export declare function validateDocumentConfig(config: JanghoodConfig, documentName: string): boolean | undefined;




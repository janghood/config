/**
 * @description janghood lint type
 * @author 阿怪
 * @date 2022/11/17 11:01
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { WithEmptyBoolean } from '../common/tools';
import { BaseConfig } from '../config';


/**
 * @description lint option base
 */
type LintBaseOptionConfig = BaseConfig & {};

export type LintOption<T = unknown> = WithEmptyBoolean<LintBaseOptionConfig & T>;



export declare type LintDefineType = {
  eslint?: LintOption<{}>,
  prettier?: LintOption<{}>,
  commitlint?: boolean,
};


export declare type EslintOption = LintBaseOptionConfig;
export declare type LintType = {
  eslint?: EslintOption,
  prettier?: LintOption<{}>,
  commitlint?: {},
};

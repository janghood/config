/**
 * @description lint init
 * @author 阿怪
 * @date 2022/11/18 01:55
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { BaseConfig, JanghoodConfig, JanghoodDefineConfig } from '../../../types/config';
import { LintOption, LintType } from '../../../types/lint';
import { easyClone, jWarn, mergeBase } from '../tools';

const initLintOption = (type: keyof LintType, base?: BaseConfig, option?: LintOption) => {
  const lintOption = mergeBase(base, option);
  if (lintOption) {
    return lintOption;
  } else if (option) {
    jWarn(`lint ${type} should have config`);
  }
};

export const initLint = async (config: JanghoodConfig, loadConfig: JanghoodDefineConfig) => {
  if (!loadConfig.lint) {return config;}

  const base = config.base;
  const baseLint: LintType = !config.lint ? {} : easyClone(config.lint);


  const eslint = initLintOption('eslint', base, loadConfig.lint.eslint);
  if (eslint) {
    baseLint.eslint = eslint;
  }

  const prettier = initLintOption('prettier', base, loadConfig.lint.prettier);
  if (prettier) {
    baseLint.prettier = prettier;
  }

  if (loadConfig.lint.commitlint) {
    baseLint.commitlint = true;
  }


  if (Object.keys(baseLint).length > 0) {
    config.lint = baseLint;
  } else {
    delete config.lint;
  }

  return config;
};

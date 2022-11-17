/**
 * @description init config
 * @author 阿怪
 * @date 2022/11/17 11:45
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { loadJanghoodConfig } from '../config';
import { JanghoodConfig } from '../../types/config';
import { jWarn, mergeBase } from './tools';


export const initConfig = async (jhConfig?: JanghoodConfig) => {
  const loadConfig = jhConfig ? jhConfig : (await loadJanghoodConfig())?.config;
  if (!loadConfig) {return;}

  const config: JanghoodConfig = {};

  config.base = loadConfig.base;

  const apiExtractor = mergeBase(config.base, loadConfig.apiExtractor);
  if (apiExtractor) {
    config.apiExtractor = apiExtractor;
  } else if (loadConfig.apiExtractor) {
    // todo add default value
    jWarn('apiExtractor should have config');
  }

  return config;
};

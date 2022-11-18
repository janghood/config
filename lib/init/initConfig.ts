/**
 * @description init config
 * @author 阿怪
 * @date 2022/11/17 11:45
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { loadJanghoodConfig } from '../config';
import { JanghoodDefineConfig, JanghoodConfig } from '../../types/config';
import { initApiExtractor } from './options/initApiExtractor';
import { initLint } from './options/initLint';


export const initConfig = async (jhConfig?: JanghoodDefineConfig) => {
  const loadConfig = jhConfig ? jhConfig : (await loadJanghoodConfig())?.config;
  if (!loadConfig) {return;}

  let config: JanghoodConfig = {};

  config.base = loadConfig.base;

  // api extractor
  config = await initApiExtractor(config, loadConfig);

  config = await initLint(config, loadConfig);

  return config;
};

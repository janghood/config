/**
 * @description api extractor init
 * @author 阿怪
 * @date 2022/11/18 01:51
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { JanghoodDefineConfig, JanghoodConfig } from '../../../types/config';
import { jWarn, mergeBase } from '../tools';

export const initApiExtractor = async (config: JanghoodConfig, loadConfig: JanghoodDefineConfig) => {
  const apiExtractor = mergeBase(config.base, loadConfig.apiExtractor);
  if (apiExtractor) {
    config.apiExtractor = apiExtractor;
  } else if (loadConfig.apiExtractor) {
    // todo add default value
    jWarn('apiExtractor should have config');
  }

  return config;
};

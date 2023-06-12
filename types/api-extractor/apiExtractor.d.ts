/**
 * @description api extractor type
 * @author 阿怪
 * @date 2022/11/17 02:15
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { Documents } from './index';
import { BaseConfig } from '../config';

/**
 * @description api option
 */
export declare type APIOptionType = BaseConfig & {
  translator?: {
    token?: () => void,
  }
}

export declare type ApiExtractorType = APIOptionType & {
  /**
   * @description document creator option
   */
  document?: Documents,
  /**
   * @description customer annotation
   */
  annotate?: Record<string, any>
}

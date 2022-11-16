/**
 * @description api extractor type
 * @author 阿怪
 * @date 2022/11/17 02:15
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { Documents } from './index';

/**
 * @description api option
 */
export declare type APIOptionType = {
  /**
   * @description scan file include path, not support filename yet
   * @type string[]
   * @default []
   */
  include?: string[],
  /**
   * @description scan file exclude path
   * @type string[]
   * @default []
   */
  exclude?: string[],
  translator?: {
    token?: () => void,
  }
}

export declare type ApiExtractorType = APIOptionType & {
  /**
   * @description document creator option
   */
  document?: Documents
}

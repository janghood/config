/**
 * @description file include and exclude type
 * @author 阿怪
 * @date 2022/11/17 11:07
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

export declare type InOrExclude = {
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
}

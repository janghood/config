/**
 * @description tools type
 * @author 阿怪
 * @date 2022/11/17 17:39
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


/**
 * @description with boolean, undefined and null
 *
 * in option, params can be false or undefined or null, means not use this too.
 * when it is true, means use base config.
 */
export type WithEmptyBoolean<T> = T | boolean | undefined | null;

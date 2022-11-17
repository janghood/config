/**
 * @description init config tools
 * @author 阿怪
 * @date 2022/11/17 18:15
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { BaseConfig } from '../../types/config';
import { WithEmptyBoolean } from '../../types/common/tools';

export const easyClone = (obj: any) => JSON.parse(JSON.stringify(obj));

export const mergeBase = (base: BaseConfig | undefined | null, mergeTo: WithEmptyBoolean<BaseConfig>) => {
  if (!mergeTo) {return undefined;}
  if (mergeTo === true) {
    // if only open mergeToOption, no config ,
    // use base and needs to be fixed default value outside this func
    return base;
  }
  if (!base) { // if base is undefined or null (null is not allowed but just in case)

    if (mergeTo) {
      return mergeTo;
    }
  }
  return Object.assign(easyClone(base), mergeTo);
};

export const jWarn = (msg: string) => {
  console.warn(msg);
};

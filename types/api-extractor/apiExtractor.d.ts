/**
 * @description api extractor type
 * @author 阿怪
 * @date 2022/11/17 02:15
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { Doc, Documents } from './index';
import { BaseConfig } from '../config';

/**
 * @description api option
 */
export declare type APIOptionType = BaseConfig & {
  translator?: {
    token?: () => void,
  }
}

export declare type  ApiExtractorAnnotateOnInitParamType = {
  doc?: Doc,
  name: string,
  children?: any[],  //todo actually is JhAPI -> fix this
  link?: any
}

export declare type ApiExtractorAnnotate = Record<string, { type: string } & ApiExtractorLifeCycles>

export declare interface ApiExtractorLifeCycles {
  onInit?: (paramJhApi: ApiExtractorAnnotateOnInitParamType) => ApiExtractorAnnotateOnInitParamType;
}

export declare type ApiExtractorType = APIOptionType & {
  /**
   * @description document creator option
   */
  document?: Documents,
  /**
   * @description customer annotation
   */
  annotate?: ApiExtractorAnnotate
}

/**
 * @description init config test
 * @author 阿怪
 * @date 2022/11/17 17:01
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { describe, expect, test, vi } from 'vitest';
import { initConfig } from '../lib/init/initConfig';


describe('test init config', () => {

  test('no config param and param config', async () => {
    vi.mock('../lib/config', () => ({
      loadJanghoodConfig: () => new Promise(resolve => resolve(undefined))
    }));
    const config = await initConfig();
    expect(config).toBeUndefined();
    vi.unmock('../lib/config');
  });

  describe('config param', () => {


    describe('unnecessary merge', () => {
      test('only base', async () => {
        const base = { base: { include: ['example'] } };
        const config = await initConfig(base);
        expect(config).toMatchObject(base);
      });

      test('only apiExtractor', async () => {
        const apiExtractor = { apiExtractor: { include: ['example'] } };
        const config = await initConfig(apiExtractor);
        expect(config).toMatchObject(apiExtractor);
      });
    });

    describe('merge', () => {

      test('base merge to open apiExtractor', async () => {
        const base = { base: { include: ['example'] } };
        const apiExtractor = { apiExtractor: true };
        const config = await initConfig({ ...base, ...apiExtractor });
        expect(config).toMatchObject({ base: { include: ['example'] }, apiExtractor: { include: ['example'] } });
      });

      test('base is empty and merge to open apiExtractor', async () => {
        const infoSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const apiExtractor = { apiExtractor: true };
        await initConfig(apiExtractor);
        expect(infoSpy).toHaveBeenCalled();
      });

      test('base merge to close apiExtractor', async () => {
        const base = { base: { include: ['example'] } };
        const apiExtractor = { apiExtractor: false };
        const config = await initConfig({ ...base, ...apiExtractor });
        expect(config).toMatchObject({ base: { include: ['example'] } });
      });

    });


  });


});

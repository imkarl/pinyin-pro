declare type CustomHandleType = 'add' | 'replace';
declare type CustomDictType = 'pinyin' | 'multiple' | 'polyphonic';
interface CustomPinyinOptions {
    /**
     * @description: multiple 对于 customPinyin 补充词汇的处理
     */
    multiple?: CustomHandleType;
    /**
     * @description: polyphonic 对于 customPinyin 补充词汇的处理
     */
    polyphonic?: CustomHandleType;
}
/**
 * @description: 用户自定义拼音
 * @param {{ [key: string]: string }} config 用户自定义的拼音映射（支持汉字、词语、句子的映射），若匹配到该映射，优先将汉字转换为该映射
 * @param {CustomPinyinOptions} options multiple/polyphonic 对于 customPinyin 补充词汇的处理
 */
export declare function customPinyin(config?: {
    [key: string]: string;
}, options?: CustomPinyinOptions): void;
export declare const getCustomDict: () => {
    [key: string]: string;
};
export declare const getCustomMultpileDict: () => string[];
export declare const getCustomPolyphonicDict: () => string[];
export declare function clearCustomDict(dict: CustomDictType | CustomDictType[]): void;
export declare function hasCustomConfig(): boolean;
export {};

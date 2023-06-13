/**
* @desc 如果我们只需要部分字段，可以采用pick
*/

interface Article {
    size: number
    title?: string
    content: string
    getSize: () => number;
}

type SeletionKeysUnion = 'title' | 'content'

// type SelectionArticle = {
//     title?: string;
//     content: string;
// }
type SelectionArticle = _Pick<Article, SeletionKeysUnion>

type _Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// A extends B 表示A是否是B的子集，如果是返回true，不是返回false
type CommonKey = string | number
type MoreKey = string | number | boolean

type Key1 = number extends CommonKey ? number : string
type key2 = MoreKey extends CommonKey ? number : string

// 当 extends 左边是一个泛型的时候，会进行拆分
type GenK<T> = T extends number ? number : string
// type Key2 = (number extends number ? number : string) | (string extends number ? number : string)
type Key2 = GenK<CommonKey>; // type Key2 = number | string;

type _Exclude<T, U> = T extends U ? never : T
type HumanFeature = 'eat' | 'swim' | 'talk' | 'create'
type DogFeature = 'eat'  | 'swim' | 'bark'
type HumanFeatureOnly = _Exclude<HumanFeature, DogFeature>

// Pick和Exclude都是typescript内建的工具泛型


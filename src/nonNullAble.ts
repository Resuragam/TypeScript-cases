/**
* @desc NonNullAble 可以过滤联合类型中 null 和 undefined
*/

type _NonNullAble<T> = T extends null | undefined ? never : T

type test = string | number | null | undefined
// type excludeTypeNullOrUndefined = string | number
type excludeTypeNullOrUndefined = _NonNullAble<test>

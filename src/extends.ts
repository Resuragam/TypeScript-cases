/**
* @desc TypeScript 支持条件判断
*/
type num = 1
type str = 'hello world'

type isNumber<T> = T extends number ? 'yes' : 'no'

type resultTrue = isNumber<num>
type resultFalse = isNumber<str>

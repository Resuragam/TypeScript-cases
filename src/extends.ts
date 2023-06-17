/**
* @desc TypeScript 支持条件判断
*/
type num = 1
type str = 'hello world'

type isNumber<T> = T extends number ? 'yes' : 'no'

type resultTrue = isNumber<num>
type resultFalse = isNumber<str>

interface IdLabel {
    id: number
}

interface NameLabel {
    name: string
}

// 函数重载
// function print(message: number): number
// function print(message: string): string
// function print(message: number | string): number | string

type Message<T extends number | string> = T extends number ? number : string
function typeMessage<T extends number | string>(message: T): Message<T> {
    throw "unimplemented";
}
const a = typeMessage('aaaaa')
const b = typeMessage(1)
const c = typeMessage(Math.random() ? 'hello' : 42)

type MessageOf<T extends { message: unknown } > = T['message']
interface Email {
    message: string
}
type EmailMessageContent = MessageOf<Email>

type Flatten<T> = T extends any[] ? T[number] : T
type FlattenStr = Flatten<string[]>;
// type FlattenStr = string

type FlattenInfer<T> = T extends Array<infer P> ? P : T 
type FlattenInferStr = Flatten<Array<string | number>>;
// type FlattenInferStr = string | number

type GetReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never
type Num = GetReturnType<() => number>;
// type Num = number
type Str = GetReturnType<(x: string) => string>;
// type Str = string
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
// type Bools = boolean[]

type ToArray<T> = T extends any ? T[] : never;
type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[];

type ToArrayNonDist<T> = [T] extends [any] ? T[] : never
type StrArrOrNumArrNonDis = ToArrayNonDist<string | number>;
// type StrArrOrNumArrNonDis = (string | number)[]




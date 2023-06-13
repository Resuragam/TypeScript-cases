/**
* @desc 映射类型
*/

interface Article {
    size: number
    title?: string
    content: string
    getSize: () => number
}

// 构建一个只读版本的Article
// type ReadonlyArticle = {
//     readonly size: number;
//     readonly title?: string;
//     readonly content: string;
//     readonly getSize: () => number;
// }
type ReadonlyArticle = {
    readonly [P in keyof Article]: Article[P]
}

// 可读版本的Article
type MutableArticle = {
    -readonly [P in keyof ReadonlyArticle]: ReadonlyArticle[P]
}

// 我们可以通过泛型推到一个新的类型
type _Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

/**
* @desc typescript的标准库提供了一些类似的泛型去使用
*/
// _Partial<T>: 将T所有字段均变成可选的
type _Partial<T> = {
    [P in keyof T]?: T[P]
}

// _Required<T>: 将所有字段变成必填的
type _Required<T> = {
    [P in keyof T]-?: T[P]
}

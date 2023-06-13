/**
* @desc Omit 排除接口当中指定的属性
*/
interface T1 {
    a: number
    b: string
    c: boolean
}

// type AC = {
//     b: string;
//     c: boolean;
// }
type AC = Omit<T1, 'a'>

type _Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type _AC = _Omit<T1, 'a'>

const str = 'hello'
let n: typeof str
// let n: string

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
// type K = boolean

function f() {
    return {
        x: 10,
        y: 10
    }
}
type P = ReturnType<typeof f>
// type P = {
//     x: number;
//     y: number;
// }

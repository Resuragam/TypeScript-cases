/**
* @desc TypeScript 基本类型 
*/

const age: number = 20
const userName: string = 'xiaoming'
const isShow: boolean = true
const guestes: Array<string> = ['a', 'b', 'c']
const backType: [number, string] = [1, 'a']
const person: Object = {
  name: userName,
  speak(): void {
    console.log(this.name)
  }
}

const black: void = null


  
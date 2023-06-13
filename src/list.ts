/**
* @desc 使用泛型构造一个链接结构
*/
class CommonList<T> {
    value: T;

    next?: CommonList<T>;

    // 构造函数
    constructor(value: T, next?: CommonList<T>) {
        this.value = value;
        this.next = next;
    }

    // 设置next
    setNext(next: CommonList<T>): CommonList<T> {
        this.next = next;
        return next;
    }

    // 链表生长
    grow(value: T): CommonList<T> {
        const t = new CommonList(value);
        this.setNext(t);
        return t;
    }

    // 递归打印自己
    toString(): string {
        return this.next ?
            JSON.stringify(this.value) + ' -> ' + this.next.toString() :
            JSON.stringify(this.value) + ' -> null'
    }
}

const _l = new CommonList(1)
_l.grow(2).grow(3).grow(4)

console.log(_l.toString())

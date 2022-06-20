const myConstructor = (fn) => {
    let instance;
    let handler = {
        construct(target, args) {
            if (!instance) {
                instance = Reflect.construct(target, args)
            }
            return instance
        }
    }
    return new Proxy(fn, handler)
}

function Person(name, age) {
    this.name = name
    this.age = age
}
const singlePerson = myConstructor(Person)
const test = () => {
    const a = new singlePerson('eee', 23)
    console.log(a.name, a.age)
}
export { test }



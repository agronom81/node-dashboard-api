function Component(id: number) {
    console.log('init');
    return (target: Function) => {
        console.log('run');
        target.prototype.id = id;
    };
}

function Method(target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
    console.log(propertyKey);
    propertyDescriptor.value = function (...args: any[]) {
        return args[0] * 10;
    };
}

function Prop(target: Object, propertyKey: string) {
    let value: number;

    const getter = () => {
        console.log('Get');

        return value;
    };

    const setter = (newValue: number) => {
        console.log('Set');

        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}

function Param(target: Object, propertyKey: string, index: number) {
    console.log({ propertyKey, index });
}

@Component(1)
export class User {
    @Prop id: number | undefined;

    @Method
    updateId(@Param newId: number) {
        this.id = newId;
        return this.id;
    }
}

console.log(new User().id);

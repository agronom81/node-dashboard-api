import 'reflect-metadata';

function Injectable(key: string) {
    return (target: Function) => {
        Reflect.defineMetadata(key, 1, target);
        const meta = Reflect.getMetadata('a', target);
        console.log(meta);
    };
}

function Inject(key: string) {
    return (target: Object, name: string) => {
        console.log(name);
    };
}

function Prop(target: Object, name: string) {
    console.log(name);
}

@Injectable('C')
export class C {
    @Prop prop: number | undefined;
}

// @Injectable('D')
// export class D {
//     constructor(@Inject('C') c: C) {}
// }

type OnlyBoolsAndHorses = {
    [key: string]: boolean;
};

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rondeny: false
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}
type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};
type FeaturesOptions = OptionsFlags<Features>
// type FeaturesOptions = {
//     darkMode: boolean;
//     newUserProfile: boolean;
// }

type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: boolean
}
type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
   
type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = {
//     id: boolean;
//     name: boolean;
// }

type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};
   
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;
// type User = {
//     id: string;
//     name: string;
//     age: number;
// }

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
interface PersonMap {
    name: string
    age: number
}
type GettersPersonMap = Getters<PersonMap>
// type GettersPersonMap = {
//     getName: () => string;
//     getAge: () => number;
// }

type RemoveKindFiled<Type> = {
    [Property in keyof Type as Exclude<Property, 'kind'>]: Type[Property]
}
interface Circle {
    kind: "circle";
    radius: number;
}
type KindlessCircle = RemoveKindFiled<Circle>;
// type KindlessCircle = {
//     radius: number;
// }

type EventConfig<Event extends { kind: string}> = {
    [E in Event as E['kind']]: (event: E) => void
}
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
type Config = EventConfig<SquareEvent | CircleEvent>
// type Config = {
//     square: (event: SquareEvent) => void;
//     circle: (event: CircleEvent) => void;
// }

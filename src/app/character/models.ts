type Raw<T, KI extends keyof T, O> = {
    [K in keyof T]:K extends KI ? O :T[K];
};
export type List<T> = {
    name:string
    next: URL | null;
    previous :URL | null;
    items: T[];
};

export type RawList<T> = Raw<List<T>, 'next' | 'previous', string>;

export type SearchData = {
    search?:string,
    page?:string
};

export type Student = {  
    id: string;
    name:string;
    alternate_names: string[]
    species: string;
    gender: string;
    house: string
    dateOfBirth: Date;
    yearOfBirth: Date;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
            wood: string;
            core: string;
            length: number
        },
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor:string
    alternate_actors: string[];
    alive: boolean;
    image: URL;
};

export type RawStudent = Raw<Raw<Raw<Student, 'alternate_names' | 'alternate_actors', string[]>, 'dateOfBirth' | 'yearOfBirth', string>, 'image', string>

export type Staff = {
    id: string;
    name:string;
    alternate_names: string[]
    species: string;
    gender: string;
    house: string
    dateOfBirth: Date;
    yearOfBirth: Date;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: number
    },
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor:string
    alternate_actors: string[];
    alive: boolean;
    image: URL;
}
export type RawStaff = Raw<Raw<Raw<Staff, 'alternate_names' | 'alternate_actors', string[]>, 'dateOfBirth' | 'yearOfBirth', string>, 'image', string>


//   interface RootObject {
//   id: string;
//   name: string;
//   alternate_names: any[];
//   species: string;
//   gender: string;
//   house: string;
//   dateOfBirth?: any;
//   yearOfBirth?: any;
//   wizard: boolean;
//   ancestry: string;
//   eyeColour: string;
//   hairColour: string;
//   wand: Wand;
//   patronus: string;
//   hogwartsStudent: boolean;
//   hogwartsStaff: boolean;
//   actor: string;
//   alternate_actors: any[];
//   alive: boolean;
//   image: string;
// }

// interface Wand {
//   wood: string;
//   core: string;
//   length?: any;
// }
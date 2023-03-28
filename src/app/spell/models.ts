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

export type Spell = {  
    id: string;
    name: string;
    description: string;
  };

  export type RawSpell = Raw<Spell, 'name' | 'description', string>
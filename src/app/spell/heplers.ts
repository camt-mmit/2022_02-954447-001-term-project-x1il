import { List, RawList, RawSpell, Spell } from "./models";


export function parseList<I, O>(obj: RawList<I>, parser: (value:I) => O): List<O>{
  return {
      ...obj,
      next: obj.next ? new URL(obj.next): null,
      previous: obj.previous ? new URL(obj.previous) : null,
      items: obj.items ? obj.items.map((value) => parser((value))): [],
  };
}

export function parseSpell(obj: RawSpell): Spell {
  console.log(obj);
  return {
    ...obj,
    name: obj.name,
    description: obj.description,

  };
}

export function parseSpellList(obj:RawList<RawSpell>): List<Spell>{
  return parseList(obj, parseSpell);
}
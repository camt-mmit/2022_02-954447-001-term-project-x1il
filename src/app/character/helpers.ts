import { List, RawList, RawStaff, RawStudent, Staff, Student } from "./models";


export function parseList<I, O>(obj: RawList<I>, parser: (value:I) => O): List<O>{
  return {
      ...obj,
      next: obj.next ? new URL(obj.next): null,
      previous: obj.previous ? new URL(obj.previous) : null,
      items: obj.items.map((value) => parser((value))),
  };
}

export function parseStudent(obj: RawStudent): Student {
  console.log(obj);
  return {
    ...obj,
    dateOfBirth: new Date(obj.dateOfBirth),
    yearOfBirth: new Date(obj.yearOfBirth),
    alternate_names: obj.alternate_names,
    alternate_actors: obj.alternate_actors,
    image: new URL(obj.image)

  };
}

export function parseStudentList(obj:RawList<RawStudent>): List<Student>{
  return parseList(obj, parseStudent);
}

export function parseStaff(obj: RawStaff): Staff {
  console.log(obj);
  return {
    ...obj,
    dateOfBirth: new Date(obj.dateOfBirth),
    yearOfBirth: new Date(obj.yearOfBirth),
    alternate_names: obj.alternate_names,
    alternate_actors: obj.alternate_actors,
    image: new URL(obj.image)

  };
}

export function parseStaffList(obj:RawList<RawStaff>): List<Staff>{
  return parseList(obj, parseStaff);
}
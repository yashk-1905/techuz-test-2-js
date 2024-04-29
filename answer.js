class Person {
  persons = [];

  constructor(initialRecord) {
    this.persons = initialRecord;
  }

  addPerson(person = {}) {
    this.persons.push(person);
    return this;
  }

  removePerson(id) {
    this.persons = this.persons.filter((person) => person.id !== id);
    return this;
  }

  editPerson(id, record = {}) {
    this.persons = this.persons.map((person) => {
      if (person.id === id) {
        return { ...person, ...record };
      }
      return person;
    });

    return this;
  }

  filterPerson(key, value) {
    this.persons = this.persons.filter((person) => person[key] === value);
    return this;
  }

  sortList(key, order = 'asc') {
    this.persons = this.persons.sort((prev, curr) => {
      if (curr[key] > prev[key]) {
        return order === 'asc' ? -1 : 1;
      } else if (prev[key] > curr[key]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return this;
  }
}

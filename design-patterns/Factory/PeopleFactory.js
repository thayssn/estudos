const PeopleFactory = function ({name, lastName}) {
    let person = {};

    person.name = name;
    person.lastName = lastName;

    function fullName(){
        return `${person.name} ${person.lastName}`;
    }

    person.fullName = fullName;

    return person

}

export default PeopleFactory;
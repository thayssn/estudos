import PeopleFactory from './PeopleFactory';

describe('People Fabric', () => {

    describe('#fullName', () => {
        it('should return full name', () => {
            const person1 = new PeopleFactory({
                name: 'Thays',
                lastName: 'Neves'
            });

            expect(person1.fullName()).toBe('Thays Neves')
        })
    })
})
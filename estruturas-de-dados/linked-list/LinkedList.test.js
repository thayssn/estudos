import { describe, expect, test } from '@jest/globals';
import LinkedList from './LinkedList';

describe('Linked List', () => {
    describe('#insertAtHead', () => {
        test('it adds the element to the beginning of the list', () => {
            const list = new LinkedList();
            list.insertAtHead(10);
            const oldHead = list.head;
            list.insertAtHead(20);
      
            expect(list.head.value).toBe(20);
            expect(list.head.next).toBe(oldHead);
            expect(list.head.next.next).toBe(null);
        })
    })

    describe('#insertAtIndex', () => {
        describe('with index < 0', () => {
            test('it does not insert anything', () => {
                const list = LinkedList.fromValues(10, 20);
                list.insertAtIndex(-1, 30);

                expect(list.length).toBe(2)
            })
        })

        describe('with index > list length', () => {
            test('it does not insert anything', () => {
                const list = LinkedList.fromValues(10, 20);
                list.insertAtIndex(5, 30);

                expect(list.length).toBe(2)
            })
        })

        describe('with index 0', () => {
            test('it should insert at the head', () => {
                const list = LinkedList.fromValues(10, 20);
                list.insertAtIndex(0,30);

                expect(list.head.value).toBe(30);
                expect(list.head.next.value).toBe(10);
                expect(list.length).toBe(3);
            })
        })

        describe('with index in the middle', () => {
            test('it should insert at the given index', () =>{
                const list = LinkedList.fromValues(10, 20, 30, 50);
                list.insertAtIndex(3, 40);

                const node = list.getByIndex(3);

                expect(node.value).toBe(40);
                expect(node.next.value).toBe(50);
                expect(list.length).toBe(5);
            });
        })
    })

    describe('#getByIndex', () => {
        describe('with index < 0', () => {
            test('it returns null', () => {
                const list = LinkedList.fromValues(10, 20, 30);
                expect(list.getByIndex(-1)).toBeNull()
            })
        })

        describe('with index > list length', () => {
            test('it returns null', () => {
                const list = LinkedList.fromValues(10, 20, 30);
                expect(list.getByIndex(5)).toBeNull()
            })
        })

        describe('with index 0', () => {
            test('it returns the head', () => {
                const list = LinkedList.fromValues(10, 20, 30);
                expect(list.getByIndex(0)).toBe(list.head)
            })
        })

        describe('with index in the middle', () => {
            test('it returns the element at that index', () =>{
                const list = LinkedList.fromValues(10, 20, 30, 40, 50);
                expect(list.getByIndex(2).value).toBe(30)
                expect(list.getByIndex(4).value).toBe(50)
            });
        })
    })

    describe('#removeHead', () => {
        describe('list has no elements', () => {
            test('does nothing', () => {
                const list = new LinkedList();
                list.removeHead()

                expect(list.head).toBeNull()
                expect(list.length).toBe(0)
            })
        })
        describe('list has elements', () => {
            test('remove the head', () => {
                const list = LinkedList.fromValues(10, 20, 30);
                list.removeHead();
    
                expect(list.head.value).toBe(20);
                expect(list.length).toBe(2);
            })
        })
    })

    describe('#removeAtIndex', () => {
        describe('with index < 0', () => {
            test('it does not remove anything', () => {
                const list = LinkedList.fromValues(10, 20);
                list.removeAtIndex(-1);

                expect(list.length).toBe(2)
            })
        })

        describe('with index > list length', () => {
            test('it does not remove anything', () => {
                const list = LinkedList.fromValues(10, 20);
                list.removeAtIndex(5);

                expect(list.length).toBe(2)
            })
        })

        describe('with index 0', () => {
            test('it should remove the head', () => {
                const list = LinkedList.fromValues(10, 20, 30);
                list.removeAtIndex(0);

                expect(list.head.value).toBe(20);
                expect(list.length).toBe(2);
            })
        })

        describe('with index in the middle', () => {
            test('it should remove at the given index', () =>{
                const list = LinkedList.fromValues(10, 20, 30, 40, 50);
                list.removeAtIndex(3);

                const node = list.getByIndex(2);

                expect(node.next.value).toBe(50);
                expect(list.length).toBe(4);
            });
        })
    })
})
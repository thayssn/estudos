export default interface EventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: EventListener): void;
}
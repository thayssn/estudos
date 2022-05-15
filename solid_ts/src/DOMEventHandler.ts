import EventHandler from "./EventHandler"
export default class DOMEventHandler implements EventHandler{
    addEventListenerToClass(clazz: string, event: string, fn: EventListener){
        const elements: NodeList = document.querySelectorAll(clazz)

        for(const element of elements){
            element.addEventListener(event, fn)
        }
    }
}
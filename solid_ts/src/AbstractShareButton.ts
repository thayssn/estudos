import DOMEventHandler from "./DOMEventHandler";
import EventHandler from "./DOMEventHandler";

export default abstract class AbstractShareButton {
    url: string
    eventHandler: EventHandler
    clazz: string

    constructor(clazz: string, eventHandler: EventHandler){
        this.eventHandler = eventHandler
        this.clazz = clazz
    }

    abstract createAction(): EventListener;

    bind(){
        let action = this.createAction();
        
        this.eventHandler.addEventListenerToClass(this.clazz, 'click', action)
    }
}
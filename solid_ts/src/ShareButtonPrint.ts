import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrint extends AbstractShareButton {
    url: string
    clazz: string

    constructor(clazz: string, eventHandler: EventHandler){
        super(clazz, eventHandler)
    }

    createAction(): EventListener {
        return () => window.print()
    }
}
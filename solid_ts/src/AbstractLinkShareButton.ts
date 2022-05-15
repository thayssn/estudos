import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string
    clazz: string

    constructor(clazz: string, url: string, eventHandler: EventHandler){
        super(clazz, eventHandler)
        this.url = url
    }

    abstract createLink(): string

    createAction(): EventListener {
        const link = this.createLink()
        return () => window.open(link)
    }
}
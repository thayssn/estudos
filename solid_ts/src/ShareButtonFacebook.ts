import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
    url: string
    clazz: string

    constructor(clazz: string, url: string, eventHandler: EventHandler){
        super(clazz, url, eventHandler)
    }

    createLink(): string {
        return `http://www.facebook.com/sharer.php?u=${this.url}`
    }
}
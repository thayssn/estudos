import AbstractLinkShareButton from "./AbstractLinkShareButton"
import EventHandler from "./EventHandler"

export default class ShareButtonTwitter extends AbstractLinkShareButton {
    url: string
    clazz: string

    constructor(clazz: string, url: string, eventHandler: EventHandler){
        super(clazz, url, eventHandler)
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`
    }
}
import AbstractLinkShareButton from "./AbstractLinkShareButton";
import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedin extends AbstractLinkShareButton {
    url: string
    clazz: string

    constructor(clazz: string, url: string, eventHandler: EventHandler){
        super(clazz, url, eventHandler)
    }

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`
    }
}
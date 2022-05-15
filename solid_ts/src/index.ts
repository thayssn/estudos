import AbstractLinkShareButton from './AbstractLinkShareButton'
import ShareButtonFacebook from './ShareButtonFacebook'
import ShareButtonLinkedin from './ShareButtonLinkedin'
import ShareButtonTwitter from './ShareButtonTwitter'
import ShareButtonPrint from './ShareButtonPrint'
import AbstractShareButton from './AbstractShareButton'
import DOMEventHandler from './DOMEventHandler'
import MockEventHandler from './mockEventHandler'

const eventHandler = new MockEventHandler()

const twitter:AbstractShareButton = new ShareButtonTwitter('.btn-twitter', 'http://www.youtube.com/rodrigobranas', eventHandler);
const facebook:AbstractShareButton = new ShareButtonFacebook('.btn-facebook', 'http://www.youtube.com/rodrigobranas', eventHandler);
const linkedin:AbstractShareButton= new ShareButtonLinkedin('.btn-linkedin', 'http://www.youtube.com/rodrigobranas', eventHandler);
const print:AbstractShareButton = new ShareButtonPrint('.btn-print', eventHandler);

twitter.bind()
facebook.bind()
linkedin.bind()
print.bind()


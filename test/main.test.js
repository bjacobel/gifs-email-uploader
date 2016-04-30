import handler, {
  extractMessageFromEvent,
  findSubject
} from '../src';
import jsonEvent from './event';

describe('main handler', () => {
  it('should process an event sucessfully', () => {
    const callback = sinon.spy();
    handler(jsonEvent, null, callback);
    expect(callback).to.have.been.calledOnce();
    expect(callback).to.have.been.calledWith(null, 'success');
  });
});

describe('findSubject', () => {
  it('should parse the subject from a text representation of an email', () => {
    expect(findSubject(extractMessageFromEvent(jsonEvent))).to.equal('Amazon');
  });
});

describe('extractMessageFromEvent', () => {
  it('should extract and parse json from the sample data', () => {
    expect(extractMessageFromEvent(jsonEvent)).to.equal(
      `Date: Fri, 29 Apr 2016 22:39:09 +0000\r\nTo: recipient@example.com\r\nFrom: Amazon Web Services <no-reply-aws@amazon.com>\r\nSubject: Amazon SES Setup Notification\r\n\r\nHello,\r\n\r\nYou received this message because you attempted to set up Amazon SES to deliver emails to this SNS topic.\r\n\r\nPlease note that the rule that you configured to deliver emails to this SNS topic is only valid if the entire setup process is successful. For more information about\r\nsetting up email-receiving rules, see the Amazon SES Developer Guide at http://docs.aws.amazon.com/ses/latest/DeveloperGuide/Welcome.html .\r\n\r\nThank you for using Amazon SES!\r\n\r\nThe Amazon SES Team\n`
    );
  });
});

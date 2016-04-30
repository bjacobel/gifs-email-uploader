import 'aws-sdk/dist/aws-sdk';

const bucket = 'gifs.bjacobel.com';

export const extractMessageFromEvent = (event) => {
  const message = event.Records[0].Sns.Message;
  return JSON.parse(message).content;
};

export const findSubject = (email) => {
  const subjectRegexp = new RegExp(/Subject:\ (\S+)/);
  return email.match(subjectRegexp)[1];
};

export const findUrl = (email) => {
  const urlRegexp = new RegExp(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/);
  return email.match(urlRegexp)[0];
};

const handler = (event, context, callback) => {
  const message = extractMessageFromEvent(event);
  const subject = findSubject(message);
  const gifUrl = findUrl(message);
  console.log(`put ${gifUrl} at ${bucket}/${subject}.gif`);
  callback(null, 'success');
};

export default handler;

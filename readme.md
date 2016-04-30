##gifs-email-uploader

Lambda function to send the URL in an email to S3.

#### Pipeline:
1. Add a domain to Route 53
2. Verify the domain with SES
3. Create an SES inbound rule that handles mail to foo@domain.com
4. Make the rule's action an SNS topic
5. Create a Lambda function subscribed to that SNS topic
6. Create an S3 bucket foo.domain.com
7. Send an email with the filename as the subject and the URL containing the contents you'd like to upload to foo@domain.com and observe it uploaded to http://foo.domain.com.s3.amazonaws.com/filename

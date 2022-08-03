const aws = require('aws-sdk')
const ses = new aws.SES()

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT')  {
      const contactName = streamedItem.dynamodb.NewImage.name.S
      const contactEmail = streamedItem.dynamodb.NewImage.email.S
      const contactTelephone = streamedItem.dynamodb.NewImage.telephone.S
      const contactMessage = streamedItem.dynamodb.NewImage.message.S

      await ses.sendEmail({
        Destination: {
          ToAddresses: [process.env.SES_EMAIL],
        },
        Source: process.env.SES_EMAIL,
        Message: {
          Subject: {
            Data: 'Contact form Submission'
          },
          Body: {
            Text: {
              Data: `My name is ${contactName}. You can reach me at ${contactEmail} or Tel: ${contactTelephone}. Message: ${contactMessage}. `
            },
          },
        },
      })
      .promise()
    }
  }
  return { status: 'Message Sent'}
};

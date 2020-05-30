// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.getNotesHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify([
                {
   
                    "title": "serverless presentation",
                    "content": "Create demo app using aws services",
                    "createdAt": "2020-05-30T00:00:00Z",
                    "createdBy": "sandip"
                },
                {
   
                    "title": "Doctor's  Appointment",
                    "content": "Visit doctor for regular checkup ",
                    "createdAt": "2020-05-30T10:00:00Z",
                    "createdBy": "sandip"
                }

            ])
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

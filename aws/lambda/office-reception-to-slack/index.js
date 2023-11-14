const https = require('https');
const url = require('url');

// TODO Slack Incoming Webhook URLを設定
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/xxxx/xxxx/xxxx';

exports.handler = async (event) => {
    let responseMessage = 'Failed to send message to Slack';

    // Lambda関数はAPI Gateway経由で呼び出されることを想定
    const formData = JSON.parse(event.body);

    const postData = JSON.stringify({
        text: `【テスト】来客通知: ${formData.type}`
    });

    const slackOptions = url.parse(SLACK_WEBHOOK_URL);
    slackOptions.method = 'POST';
    slackOptions.headers = {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    };

    try {
        await new Promise((resolve, reject) => {
            const req = https.request(slackOptions, (res) => {
                if (res.statusCode === 200) {
                    resolve();
                } else {
                    reject(new Error(`Status Code: ${res.statusCode}`));
                }
            });

            req.on('error', (e) => {
                reject(e);
            });

            req.write(postData);
            req.end();
        });

        responseMessage = 'Successfully sent message to Slack';
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ success: responseMessage === 'Successfully sent message to Slack', message: responseMessage }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
};

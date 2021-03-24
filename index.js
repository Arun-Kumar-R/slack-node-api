const Slack = require("slack-node");

const MY_SLACK_WEBHOOK_URL = "";

const slack = new Slack();
slack.setWebhook(MY_SLACK_WEBHOOK_URL);

slack.webhook(
  {
    channel: "#general",
    username: "Arun",
    icon_emoji: ":user:",
    text:
      "This is posted to #general and comes from a bot named webhookbot AustinoLabs.",
  },
  (err, response) => {
    console.log(response);
  }
);


# Discord Demo App

This is a sample app to quickly get you started with sending Discord notifications using Novu. It'll help you go from nothing to sending Discord notifications, with Novu, in no time. Just execute the following steps outlined in this readme and you'll be all set. You can also go through the corresponding [guide](https://docs.novu.co/guides/discord-guide) for this app.

## Organization

This repository has two primary directories - `frontend` and `backend`, and as their names suggest, they contain code for the front-end and back-end of the demo app respectively. You need to go to both these directories separately and install dependencies.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend directory:

`YOUR_NOVU_API_KEY_HERE`, `SUB_ID`, and `WEBHOOK_URL`

You can get the `YOUR_NOVU_API_KEY_HERE` from the [Novu dashboard](https://web.novu.co/settings)

## Run Locally

Clone the project

```bash
    git clone https://github.com/novuhq/discord-chat-app
```

Go to the backend directory

```bash
    cd discord-chat-app  
```

Install dependencies

```bash
    npm install
```

Create a `.env` file and place the respective values under these labels: `YOUR_NOVU_API_KEY_HERE`, `SUB_ID`, and `WEBHOOK_URL`. You can get the `YOUR_NOVU_API_KEY_HERE` from the [Novu dashboard](https://web.novu.co/settings), and the `WEBHOOK_URL` from the [Discord channel settings](https://docs.novu.co/channels-and-providers/chat/discord).

Start the server

```bash
  npm run start
```

Go to the frontend directory

```bash
cd ../frontend
```

Install dependencies

```bash
  npm install
```

Run the project

```bash
npm start
```

Your project should now be running on localhost.

## Next steps

The corresponding guide to this project has been published in the [Novu docs](https://docs.novu.co/guides/discord-guide).

Give it a read in case you're unsure about something

If you're facing any difficulty, send me a message [here](https://discord.gg/novu)

## Contributing

Contributions are always welcome!

If you want to improve this project in any way, don't hesitate to create issues and raise PRs.

We'd love to see what you bring to this!

## Authors

- [@sumitsaurabh927](https://twitter.com/sumitsaurabh927)

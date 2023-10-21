import { Novu, ChatProviderIdEnum } from '@novu/node';

export const chat = async (chatMsg) => {
    try {
        const novu = new Novu(process.env.YOUR_NOVU_API_KEY_HERE);

        await novu.subscribers.identify(process.env.SUB_ID, {
            firstName: 'newSubForDiscordChat',
        });

        await novu.subscribers.setCredentials(process.env.SUB_ID, ChatProviderIdEnum.Discord, {
            webhookUrl: process.env.WEBHOOK_URL
        });

        await novu.trigger('chat-with-discord', {
            to: {
                subscriberId: process.env.SUB_ID
            },
            payload: {
                chatMsg: chatMsg
            }
        });
    } catch (error) {
        console.log(error);
    }
}
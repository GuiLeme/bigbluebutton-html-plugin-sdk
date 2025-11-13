export interface SampleUiCommandsPluginProps {
    pluginName: string,
    pluginUuid: string,
}

export interface PrivateChatSubscriptionResult {
    chat: Array<{
        chatId: string;
        participant: {
            userId: string;
            name: string;
        };
    }>;
}

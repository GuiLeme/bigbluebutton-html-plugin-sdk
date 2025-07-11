interface SampleMediaAreaPluginProps {
    pluginName: string,
    pluginUuid: string,
}

interface IsMeetingBreakoutGraphqlResponse {
    meeting: {
        isBreakout: boolean;
    }[]
}

export { SampleMediaAreaPluginProps, IsMeetingBreakoutGraphqlResponse };

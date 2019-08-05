
import { ChannelConfiguration } from './channel-configuration.model'

export class Channel {
    
    id: number

    name: string

    state: string

    configuration: ChannelConfiguration

    constructor() {

        this.id = -1
        this.name = "New Channel"
        this.state = "halt"
        this.configuration = new ChannelConfiguration()
    }
}
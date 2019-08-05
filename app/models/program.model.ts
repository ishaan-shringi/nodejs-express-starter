
import { MediaNode } from "./media-node.model";

export class Program {

    id: number

    name: string

    channel_id: number

    //state = done, live, ready
    state: string

    start_time: number

    end_time: number
    
    media_node_list: MediaNode[]
    
    constructor() {
        this.id = -1
        this.name = "New Program"
        this.channel_id = 0
        this.state = 'ready'
        this.start_time = 0
        this.end_time = 0
        this.media_node_list = []
    }
}
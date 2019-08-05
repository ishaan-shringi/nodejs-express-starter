import { MediaNode } from "./media-node.model";
import { MediaNodeTypes } from "./media-node-types.model";

export class LiveMediaNode extends MediaNode {

    input_link: string

    program_number: number

    allow_captions: boolean

    constructor() {
        super()
        this.type = MediaNodeTypes.LiveMediaNode
        this.program_number = 0
        this.allow_captions = true
    }
}
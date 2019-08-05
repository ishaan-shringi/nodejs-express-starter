import { MediaNode } from "./media-node.model";
import { FileNode } from "./file-node.model";
import { MediaCaption } from "./media-caption.model";
import { MediaNodeTypes } from "./media-node-types.model";

export class FileMediaNode extends MediaNode {

    file: FileNode

    caption?: MediaCaption

    clip_in_time: number

    clip_out_time: number

    tape_id: string

    media_type: string

    constructor() {
        super()
        this.type = MediaNodeTypes.FileMediaNode
        this.file = new FileNode()
        this.clip_in_time = 0
        this.clip_out_time = 0
        this.caption = null
    }
}
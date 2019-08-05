import { MediaCaption } from './media-caption.model'
import { FileNode } from './file-node.model'
import { MediaGraphicAsset } from './media-graphic-asset.model'
import { MediaEventAsset } from './media-event-asset.model'
import { MediaNodeError } from './media-node-error.model';
import { MediaNodeTypes } from './media-node-types.model';

export class MediaNode {

    id: number

    name: string

    //state = done, live, next, ready
    state: string

    type: string = null

    start_time: number

    playout_duration: number

    media_graphic_asset_list: MediaGraphicAsset[] = []

    media_event_asset_list: MediaEventAsset[] = []

    error?: MediaNodeError
    
    constructor() {
        this.id = 0
        this.state = 'ready'
        this.start_time = 0
        this.playout_duration = 0
        this.media_graphic_asset_list = []
        this.media_event_asset_list = []
        this.error = null
    }
}
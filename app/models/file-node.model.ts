import { MediaCaption } from "./media-caption.model";

export class FileNode {

    path: string

    name: string

    //type = 'media','caption','directory'
    type: string
    
    format_key: string

    format_name: string

    file_size: number

    bitrate: number

    media_title?: string

    media_artist?: string

    media_composer?: string

    media_type?: string

    tape_id?: string

    duration: number

    caption?: MediaCaption

    video_streams: VideoStream[]

    audio_streams: AudioStream[]


    children: FileNode[]

    constructor() {
        this.path = ""
        this.name = ""
        this.type = ""
        this.media_type = ""
        this.tape_id = ""
        this.duration = 0
        this.caption = null
        this.children = []
    }
}

class MediaStream {

    codec_type: string
    codec_key: string
    codec_name: string

    duration: number
    bitrate: number
    frame_count: number

    constructor() {}
}

class VideoStream extends MediaStream {

    resolution_h: number
    resolution_w: number

    constructor() {
        super()
    }
}

class AudioStream extends MediaStream {

    sample_format: string
    sample_rate: number

    constructor() {
        super()
    }
}
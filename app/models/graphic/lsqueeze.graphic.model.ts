import { GraphicType } from './graphic-type.model';
import { MediaGraphic } from './media-graphic.model';

export class LSqueeze extends MediaGraphic {

    directory_path: string
    position: string
    offset_x: number
    offset_y: number
    squeeze_in_duration: number
    squeeze_out_duration: number
    duration: number
    interval: number

    scale_video: boolean
    scale_offset_x: number
    scale_offset_y: number
    scale_size_width: number
    scale_size_height: number

    constructor() {

        super()
        this.name = "New L-Squeeze"
        this.type = new GraphicType("lsqueeze", "L-Squeeze")
        this.position = 'top-left'
        this.offset_x = 0
        this.offset_y = 0
        this.squeeze_in_duration = 0
        this.squeeze_out_duration = 0
        this.duration = 0
        this.interval = 0

        this.scale_video = false
        this.scale_offset_x = 0
        this.scale_offset_y = 0
        this.scale_size_height = 0
        this.scale_size_width = 0
    }
}
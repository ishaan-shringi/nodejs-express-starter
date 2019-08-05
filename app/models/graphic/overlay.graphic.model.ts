
import { GraphicType } from './graphic-type.model';
import { MediaGraphic } from './media-graphic.model';

export class Overlay extends MediaGraphic {

    directory_path: string
    file_path: string
    offset_x: number
    offset_y: number

    scale_video: boolean
    scale_offset_x: number
    scale_offset_y: number
    scale_size_width: number
    scale_size_height: number

    constructor() {

        super()
        this.name = "New Overlay"
        this.type = new GraphicType("overlay", "Overlay")
        this.offset_x = 0
        this.offset_y = 0
        
        this.scale_video = false
        this.scale_offset_x = 0
        this.scale_offset_y = 0
        this.scale_size_height = 0
        this.scale_size_width = 0
    }
}
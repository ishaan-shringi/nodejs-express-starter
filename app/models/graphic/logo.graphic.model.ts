
import { GraphicType } from './graphic-type.model';
import { MediaGraphic } from './media-graphic.model';

export class Logo extends MediaGraphic {

    directory_path: string
    transparency: number
    offset_x: number
    offset_y: number
    rotate_animation: false

    constructor() {
        super()
        this.name = "New Logo"
        this.type = new GraphicType("logo", "Logo")
        this.offset_x = 0
        this.offset_y = 0
        this.transparency = 0
        this.rotate_animation = false
    }
}

import { GraphicType } from './graphic-type.model';
import { MediaGraphic } from './media-graphic.model';

export class Alert extends MediaGraphic {

    text_message: string = "Alert Text"
    font_style: string = null
    font_size: number = 14
    is_bold: boolean = false
    is_italic: boolean = false
    is_underline: boolean = false
    text_color: string = '#000000'
    text_transparency: number = 100
    background_color: string = '#ffffff'
    background_transparency: number = 100
    position_x: number = 0
    position_y: number = 0

    constructor() {
        super()
        this.name = "New Alert"
        this.type = new GraphicType("alert", "Alert")
    }
}
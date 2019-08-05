
import { GraphicType } from './graphic-type.model';
import { MediaGraphic } from './media-graphic.model';

export class Crawl extends MediaGraphic {

    text_message: string = 'Enter crawl text here'
    file_path: string = null
    rss_feed_link: string = null
    font_style: string = 'Arial'
    font_size: number = 14
    is_bold: boolean = false
    is_italic: boolean = false
    is_underline: boolean = false
    text_color: string = "#000000"
    text_transparency: number = 100
    background_color: string = "#ffffff"
    background_transparency: number = 100
    crawl_direction_to_right:boolean = true 
    crawl_speed: number = 1
    position_y: number = 0

    constructor() {
        super()
        this.name = "New Crawl"
        this.type = new GraphicType("crawl", "Crawl")
        this.position_y = 0
    }
}
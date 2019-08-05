
import { Channel } from './channel.model'
import { GraphicType } from './graphic/graphic-type.model'
import { User } from './user.model'
import { MediaEvent } from './media-event.model'
import { MediaGraphic } from './graphic/media-graphic.model';
import { LiveInputAsset } from './live-input-asset.model';
import { UIThemes } from './ui-theme.model';

export class AppState {

    current_user: User

    channels : Channel[]

    graphic_types : GraphicType[]

    graphic_list : MediaGraphic[]

    file_system_root: string 

    machine_time : number

    timezone_offset: number

    media_event_list: MediaEvent[]

    font_style_list: string[]

    live_input_asset_list: LiveInputAsset[]

    ui_theme: UIThemes

    constructor() {

        this.channels = []
        this.graphic_types = []
        this.graphic_list = []
        this.media_event_list = []
        this.font_style_list = []
        this.machine_time = 0
        this.file_system_root = ""
    }
}

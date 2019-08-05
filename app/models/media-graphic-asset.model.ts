import { MediaGraphic } from "./graphic/media-graphic.model";

export class MediaGraphicAsset {

    id: number

    graphic: MediaGraphic

    offset: number

    duration: number

    /**
     * state = ready/live/next/done
     */
    state: string

    constructor(id:number=null, graphic:MediaGraphic, offset:number=0, duration:number=0, state:string='ready') {
        this.id = id
        this.graphic = graphic
        this.offset = offset
        this.duration = duration
        this.state = state
    }
}
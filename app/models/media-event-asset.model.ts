import { MediaEvent } from "./media-event.model";

export class MediaEventAsset {

    id: number

    media_event: MediaEvent

    offset: number

    /**
     * state = ready/live/next/done
     */
    state: string

    constructor(id:number=null, media_event:MediaEvent=null, offset:number=0, state:string='ready') {
        this.id = id
        this.media_event = media_event
        this.offset = offset
        this.state = state
    }
}
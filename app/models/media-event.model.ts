
export class MediaEvent {

    id: number

    name: string

    configuration?: {
        
        preroll_delay: number

        duration: number
    }

    constructor() { 

        this.id = 0
        this.name = null
        this.configuration = null
    }
}

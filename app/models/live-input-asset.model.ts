export class LiveInputAsset {

    id: number

    name: string

    input_link: string

    program_number: number

    allow_captions: boolean

    constructor() {
        this.id = 0
        this.name = 'Live Asset'
        this.program_number = 0
        this.allow_captions = true
        this.input_link = null
    }
}
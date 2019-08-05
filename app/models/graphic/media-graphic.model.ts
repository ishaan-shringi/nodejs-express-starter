import { GraphicType } from "./graphic-type.model";

export class MediaGraphic {
    
    id : number

    type : GraphicType

    name : string

    tape_id: string

    constructor() {

        this.id = 0
        this.type = new GraphicType()
        this.name = "New Graphic"
        this.tape_id = null
    }
}
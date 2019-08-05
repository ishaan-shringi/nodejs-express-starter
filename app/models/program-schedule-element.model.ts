import { ScheduleElement } from "./schedule-element.model"
import { Program } from "./program.model";

export class ProgramScheduleElement extends ScheduleElement {

    program: Program

    constructor(program: Program = null) {
        super()
        this.element_type = 'program'
        this.program = program
    }
}

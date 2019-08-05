import { ScheduleElement } from "./schedule-element.model"

export class GapScheduleElement extends ScheduleElement {

    start_time: number

    end_time: number

    constructor(start_time:number=0, end_time:number=0) {
        super()
        this.element_type = 'gap'
        this.start_time = start_time
        this.end_time = end_time
    }
}
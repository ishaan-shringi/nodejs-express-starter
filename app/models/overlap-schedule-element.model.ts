import { ScheduleElement } from "./schedule-element.model"

export class OverlapScheduleElement extends ScheduleElement {

    start_time: number

    end_time: number

    constructor(start_time:number=0, end_time:number=0) {
        super()
        this.element_type = 'overlap'
        this.start_time = start_time
        this.end_time = end_time
    }
}
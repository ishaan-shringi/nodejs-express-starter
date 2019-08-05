export class FSConfig {

    select_file: boolean
    message: string
    message_type: string
    select_file_type: string

    constructor(select_file:boolean=false, message:string=null, message_type:string=null, select_file_type:string="media") {
        this.select_file = select_file
        this.select_file_type = select_file_type
        this.message = message
        this.message_type = message_type
    }
}
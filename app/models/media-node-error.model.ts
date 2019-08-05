
export class MediaNodeError {

    text: string

    //class= DURATION, FILE_MISSING, PURGED, SKIPPED_LIVE, REPLACED_LIVE
    type: string

    data?: any

    constructor(type:string, text:string=null, data:any=null) {
        this.type = type
        if(text===null) {
            if(type==='SKIPPED_LIVE') {
                this.text = 'Skipped live'
            }
            else if(type==='REPLACED_LIVE') {
                this.text = 'Replaced live'
            }
            else if(type==='PURGED') {
                this.text = 'Purged due to conflict'
            }
            else if(type==='FILE_MISSING') {
                this.text = 'Missing from system'
            }
        }
        else {
            this.text = text
        }
        this.data = data
    }
}
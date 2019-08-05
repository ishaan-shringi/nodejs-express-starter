
export class MediaCaption {

    enable: boolean

    file_path: string

    file_type: string

    offset: number

    constructor(file_path:string=null, file_type:string=null, offset:number=0, enable:boolean=true) {

        this.file_path = file_path

        this.file_type = file_type

        this.offset = offset

        this.enable = enable
    }
}
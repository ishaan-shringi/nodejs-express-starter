import { ImportScheduleCSVProgramsConfiguration } from "./import-schedule-csv-programs-configuration.model";

export class ChannelConfiguration {

    mode: string
    bitrate: string 
    program_number: number
    frame_rate: string

    source: {

        interface: string
        ip: string
        port: string
    }

    destination: {

        interface: string
        ip: string
        port: string
    }

    video: {    
        enable: boolean
        codec: string
    }

    audio: {
        enable: boolean
        codec: string
    }

    video_transition_effect_id: number

    graphics: {
        main_logo: {
            enable: boolean
            transparency: number
            position_left: number
            position_top: number
            directory_path: string
            media_type_list: {
                P: boolean
                S: boolean
                PR: boolean
                C: boolean
                O: boolean
                F: boolean
                L: boolean
                VP: boolean
                I: boolean
                None: boolean
            }
        }
    
        playing_now: {
            enable: boolean
            font_size: number
            font_name: string
            text_color: string
            text_transparency: number
            is_bold: boolean
            is_italic: boolean
            is_underline: boolean
            background_color: string
            background_transparency: number
            position_left: number
            position_top: number
            directory_path: string
        }
    
        playing_next: {
            enable: boolean
            font_size: number
            font_name: string
            text_color: string
            text_transparency: number
            is_bold: boolean
            is_italic: boolean
            is_underline: boolean
            background_color: string
            background_transparency: number
            position_left: number
            position_top: number
            directory_path: string
        }

        back_in: {
            enable: boolean
            directory_path: string
        }
    
        captions: {
            enable: boolean
            font_size: number
            font_name: string
            text_color: string
            text_transparency: number
            is_bold: boolean
            is_italic: boolean
            is_underline: boolean
            background_color: string
            background_transparency: number
            position_left: number
            position_top: number
        }
    }

    assets: {
        graphics_directory_path: string
        captions_directory_path: string
    }

    custom_resolution: {

        enable: boolean
        height: string
        width: string
    }

    import_schedule: {
        csv_programs: ImportScheduleCSVProgramsConfiguration
    }

    constructor() {

        this.mode = ""
        this.bitrate = ""
        this.program_number = 1
        this.frame_rate = ""

        this.source = {
            interface:"",
            ip:"",
            port:""
        }

        this.destination = {
            interface:"",
            ip:"",
            port:""
        }

        this.video = {
            enable: true,
            codec:""
        }

        this.audio = {
            enable: true,
            codec: ""
        }

        this.video_transition_effect_id = 0

        this.graphics = {
            main_logo: {
                enable: true,
                transparency: 0,
                position_left: 0,
                position_top: 0,
                directory_path: null,
                media_type_list: {
                    P: true,
                    S: true,
                    PR: false,
                    C: false,
                    O: false,
                    F: false,
                    L: false,
                    VP: false,
                    I: false,
                    None: false
                }
            },
            playing_now: {
                enable: true,
                font_size: 0,
                font_name: null,
                text_color: null,
                text_transparency: 0,
                is_bold: false,
                is_italic: false,
                is_underline: false,
                background_color: null,
                background_transparency: 0,
                position_left: 0,
                position_top: 0,
                directory_path: null
            },
            playing_next: {
                enable: true,
                font_size: 0,
                font_name: null,
                text_color: null,
                text_transparency: 0,
                is_bold: false,
                is_italic: false,
                is_underline: false,
                background_color: null,
                background_transparency: 0,
                position_left: 0,
                position_top: 0,
                directory_path: null
            },
            back_in: {
                enable: true,
                directory_path: null
            },
            captions: {
                enable: true,
                font_size: 0,
                font_name: null,
                text_color: null,
                text_transparency: 0,
                is_bold: false,
                is_italic: false,
                is_underline: false,
                background_color: null,
                background_transparency: 0,
                position_left: 0,
                position_top: 0,
            }
        }

        this.assets = {
            captions_directory_path: "",
            graphics_directory_path: ""
        }

        this.custom_resolution = {
            enable: false,
            height: "",
            width: ""
        }
        
        //Sample data
        this.graphics = {
            main_logo: {
                enable: true,
                transparency: 100,
                position_left: 1600,
                position_top: 900,
                directory_path: "D:\\ZeeTV\\Graphics\\LOGO\\BUG",
                media_type_list: {
                    P: true,
                    S: true,
                    PR: false,
                    C: false,
                    O: false,
                    F: false,
                    L: false,
                    VP: false,
                    I: false,
                    None: false
                }
            },
            playing_now: {
                enable: true,
                font_size: 27,
                font_name: "Arial Black",
                text_color: "#ffffff",
                text_transparency: 100,
                is_bold: true,
                is_italic: false,
                is_underline: false,
                background_color: "#ffffff",
                background_transparency: 0,
                position_left: 130,
                position_top: 166,
                directory_path: "D:\\ZeeTV\\Graphics\\NOW_STATIC"
            },
            playing_next: {
                enable: true,
                font_size: 27,
                font_name: "Arial Black",
                text_color: "#ffffff",
                text_transparency: 100,
                is_bold: true,
                is_italic: false,
                is_underline: false,
                background_color: "#ffffff",
                background_transparency: 0,
                position_left: 130,
                position_top: 166,
                directory_path: "D:\\ZeeTV\\Graphics\\NOW_NEXT"
            },
            back_in: {
                enable: true,
                directory_path: "D:\\ZeeTV\\Graphics\\BACK_IN"
            },
            captions: {
                enable: true,
                font_size: 30,
                font_name: "Arial Black",
                text_color: "#ffffff",
                text_transparency: 100,
                is_bold: true,
                is_italic: false,
                is_underline: false,
                background_color: "#ffffff",
                background_transparency: 0,
                position_left: 0,
                position_top: 0,
            }
        }

        this.assets = {
            captions_directory_path: "",
            graphics_directory_path: ""
        }

        this.custom_resolution = {
            enable: false,
            height: "",
            width: ""
        }

        this.import_schedule = {
            csv_programs: new ImportScheduleCSVProgramsConfiguration()
        }
    }
}
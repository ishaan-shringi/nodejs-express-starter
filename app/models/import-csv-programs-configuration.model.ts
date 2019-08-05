export class ImportCSVProgramsConfiguration {

    scte35_in_commercials: boolean = true

    scte35_preroll_delay: string = null

    common_file_for_commercials: boolean = true

    common_commercial_file_path: string = null

    adjust_network_drive_paths: boolean = false

    auto_fix_program_overlaps: boolean = false

    constructor() { }
}
import { Status } from "../enum/status"



export type taskStatusTypes = Status.todo | Status.completed | Status.inProgress

export interface ItaskCounter{
    status : taskStatusTypes,
    count: number
}
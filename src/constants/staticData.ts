 export type optionType ={
    id:string,
    name:string
}

export const PRIORITY_OPTIONS : optionType[]= [
    { id: 'low', name: 'Low' },
    { id: 'High', name: 'High' },
    { id: 'Medium', name: 'Medium' },
]

export const STATUS_OPTIONS :optionType[]= [
    { id: 'InProgress', name: 'In Progress' },
    { id: 'Complete', name: 'Complete' },
]
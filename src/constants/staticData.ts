export type optionType = {
    id: string;
    name: string;
};

export const PRIORITY_OPTIONS: optionType[] = [
    { id: 'Low', name: 'Low' },
    { id: 'High', name: 'High' },
    { id: 'Medium', name: 'Medium' },
];

export const STATUS_OPTIONS: optionType[] = [
    { id: 'Todo', name: 'Todo' },
    { id: 'InProgress', name: 'InProgress' },
    { id: 'Completed', name: 'Completed' },
];

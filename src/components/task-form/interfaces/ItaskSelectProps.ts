import { SelectChangeEvent } from '@mui/material/Select';
export interface ImenuOption {
    id: string;
    name: string;
}

export interface ItaskSelectProps {
    labelName: string;
    menuOptions: ImenuOption[];
    onSelectHandler?: (e: SelectChangeEvent) => void;
    selectedValue: string | null;
    id: string;
}

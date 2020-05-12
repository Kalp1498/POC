export interface IAdvanceSearch {
    selectedCustomerNames?: string[],
    selectedShippers?: string[],
    selectedFromDate?: string,
    selectedToDate?: string,
    selectedFromAmount?: number,
    selectedToAmount?: number
}

export class AdvanceSearch implements IAdvanceSearch {
    selectedCustomerNames?: string[];
    selectedShippers?: string[];
    selectedFromDate?: string;
    selectedToDate?: string;
    selectedFromAmount?: number;
    selectedToAmount?: number;

    constructor() {
        this.selectedCustomerNames = [];
        this.selectedShippers = [];
        this.selectedFromDate = "";
        this.selectedToDate = "";
        this.selectedFromAmount = 0;
        this.selectedToAmount = 0;
    }
}
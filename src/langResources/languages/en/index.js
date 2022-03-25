import AppLabels from './appLabels';
import TableLabels from './tableLabels';
import ChartLabels from './chartLabels';
import SearchLabels from './searchLabels';
import PaginationLabels from './paginationLabels';
import FilterAmountLabels from './filterAmountLabels';
import FilterOrderLabels from './filterOrderLabels';
import FilterOrderByLabels from './filterOrderByLabels';

export default {
    app: AppLabels,
    table: TableLabels,
    pagination: PaginationLabels,
    chart: ChartLabels,
    search: SearchLabels,
    filters: {
        amount: FilterAmountLabels,
        order: FilterOrderLabels,
        orderBy: FilterOrderByLabels
    }
};

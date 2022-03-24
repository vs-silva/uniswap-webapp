import TableLabels from './tableLabels';
import ChartLabels from './chartLabels';
import PaginationLabels from './paginationLabels';
import FilterAmountLabels from './filterAmountLabels';
import FilterOrderLabels from './filterOrderLabels';
import FilterOrderByLabels from './filterOrderByLabels';

export default {
    table: TableLabels,
    pagination: PaginationLabels,
    chart: ChartLabels,
    filters: {
        amount: FilterAmountLabels,
        order: FilterOrderLabels,
        orderBy: FilterOrderByLabels
    }
};

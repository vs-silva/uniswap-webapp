import HeaderLabels from './headerLabels';
import CardLabels from './cardLabels';
import TableLabels from './tableLabels';
import ChartLabels from './chartLabels';
import SearchLabels from './searchLabels';
import PaginationLabels from './paginationLabels';
import FilterAmountLabels from './filterAmountLabels';
import FilterOrderLabels from './filterOrderLabels';
import FilterOrderByLabels from './filterOrderByLabels';

export default {
    header: HeaderLabels,
    card: CardLabels,
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

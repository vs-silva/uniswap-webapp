import TableLabels from './tableLabels';

function generateTableData(tokensData) {

    const result = {
        header: {},
        items: []
    };

    if(!tokensData) {
        return result;
    }

    result.header = TableLabels.headers;
    result.items = tokensData;

    return result;
}

function displayTable(tableData) {
    const { items } = JSON.parse(JSON.stringify(tableData));
    return (items.length > 0);
}

export default {
    generateTableData,
    displayTable
};

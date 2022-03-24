import TableLabels from './tableLabels';
import ErrorManager from '../../errorManager';

export default (props) => {

    if(!props) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Table Utils'
        });
    }

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

    function updateTable(props) {
        return generateTableData(extractTokensData(props));
    }

    function displayTable(props) {
        const tokensData = extractTokensData(props);
        return (tokensData && Array.isArray(tokensData) && tokensData.length > 0);
    }

    function extractTokensData(props) {
        const { tokensData } = JSON.parse(JSON.stringify(props));
        return tokensData;
    }

    return {
        generateTableData,
        updateTable,
        displayTable
    };
};

/*


function displayTable(tableData) {
    const { items } = JSON.parse(JSON.stringify(tableData));
    return (items.length > 0);
}

export default {
    generateTableData,
    displayTable
}; */

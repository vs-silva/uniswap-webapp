import TableLabels from './tableLabels';
import ErrorManager from '../../errorManager';
import {ref} from "vue";

export default (props) => {

    if(!props) {
        return ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'Table Utils'
        });
    }

    const tableData = ref(null);

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
        tableData.value = generateTableData(extractTokensData(props));
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
        tableData,
        generateTableData,
        updateTable,
        displayTable
    };
};


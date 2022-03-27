import ErrorManager from '../../errorManager';
import {ref} from "vue";

export default (props) => {

    if(!props) {
        return ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'User Card Utils'
        });
    }

    const userCardData = ref(null);

    function updateCard(props) {
        userCardData.value = extractTokensData(props);
    }

    function extractTokensData(props) {
        const { userData } = JSON.parse(JSON.stringify(props));
        return userData;
    }

    return {
        userCardData,
        updateCard
    };
};

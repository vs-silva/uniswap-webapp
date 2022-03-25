import OrderByFilterLabels from './orderByFilterLabels';
import {Translate} from "../../langResources";
import ErrorManager from '../../errorManager';
import {ref} from "vue";

export default (props, emit) => {

    if(!props || !emit) {
        ErrorManager.processError({
            error: 'Required params must be provided',
            reporter: 'OrderBy Utils'
        });
    }

    const orderByData = ref(generateOrderByData(props));
    const selectedOption = ref('');

    function generateOrderByData(props) {

        const result = {
            name: '',
            options: []
        };

        const tokensData = extractTokensData(props);

        if(!tokensData || !Array.isArray(tokensData) || tokensData.length === 0) {
            return result;
        }

        const tokenKeys = generateTokenKeys(tokensData[0]);

        result.name = Translate(OrderByFilterLabels.label);

        tokenKeys.forEach(item => {
            result.options.push({
                value: item,
                description: Translate(OrderByFilterLabels.select.options[item]) || item
            });
        });

        return result;
    }

    function generateTokenKeys(tokenData) {

        if(!tokenData) {
            return [];
        }

        const tempKeys = Object.keys(tokenData).filter( x => x !== 'id').reverse();

        return tempKeys.map(x => {
            if(x === 'supply'){
                return x.replace('supply','totalSupply');
            }

            if(x === 'tvlUSD'){
                return x.replace('tvlUSD','totalValueLockedUSD');
            }

            return x;
        });
    }

    function extractTokensData(props) {
        const { tokensData } = JSON.parse(JSON.stringify(props));
        return tokensData;
    }

    function emitChange(selectedOption) {
        emit('update:token-sortBy', selectedOption);
    }

    function setOptionInitialValue(unwatch) {
        if(!selectedOption.value) {
            selectedOption.value = orderByData.value.options?.[0]?.value || '';
            unwatch();
            return;
        }
    }

    return {
        orderByData,
        selectedOption,
        setOptionInitialValue,
        generateOrderByData,
        emitChange
    };
};

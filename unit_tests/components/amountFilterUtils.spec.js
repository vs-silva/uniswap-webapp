import AmountFilterUtils from '../../src/components/amountFilterComponent/amountFilterUtils';

describe('Amount Filter Utils unit tests', () => {

    test('Returns Error if required params is not provided', () => {

        const mocked = jest.fn(AmountFilterUtils);
        const expected = Error('ERROR::: Required params must be provided :: REPORTED BY::: Amount Filter Utils');
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('Utils is generated when required params is provided', () => {

        const mocked = jest.fn(AmountFilterUtils);
        const payload = () => {};
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBeDefined();

    });

    test('validateRequestedAmount ensures the payload amount cannot be less than the minimum default amount', () => {

        const amountUtils = AmountFilterUtils(()=>{});
        const mocked = jest.fn(amountUtils.validateRequestedAmount);
        const payload = -3;
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBe(1);
    });

    test('validateRequestedAmount ensures the payload amount cannot be above the maximum default amount', () => {

        const amountUtils = AmountFilterUtils(()=>{});
        const mocked = jest.fn(amountUtils.validateRequestedAmount);
        const payload = 900;
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBe(100);
    });

    test('validateRequestedAmount returns the requested amount if it is between the default values', () => {

        const amountUtils = AmountFilterUtils(()=>{});
        const mocked = jest.fn(amountUtils.validateRequestedAmount);
        const payload = 40;
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBe(40);
    });

    test('updateAmountRequest emits amount', () => {

        const amountUtils = AmountFilterUtils((amount)=>{});

        const mocked = jest.fn(amountUtils.updateAmountRequest);
        const payload = 2;
        mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);

    });

});

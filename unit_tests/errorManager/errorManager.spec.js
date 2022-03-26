import ErrorManager from '../../src/errorManager';

describe('ErrorManager unit tests', () => {

    test('ErrorManager.processError returns undefined if proper params are not provided', () => {

        const mocked = jest.fn(ErrorManager.processError);
        const payload = {};
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBeUndefined();

    });

    test('ErrorManager.processError returns new Error obj without reporter if only error param is provided', () => {

        const mocked = jest.fn(ErrorManager.processError);
        const expected = new Error('ERROR::: Some error');
        const payload = {
            error: 'Some error'
        };
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

    test('ErrorManager.processError returns new Error obj with reporter if reporter param is provided', () => {

        const mocked = jest.fn(ErrorManager.processError);
        const expected = new Error('ERROR::: Some error :: REPORTED BY::: Some reporter');
        const payload = {
            error: 'Some error',
            reporter: 'Some reporter'
        };
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

});

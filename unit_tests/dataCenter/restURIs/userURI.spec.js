import UserURI from '../../../src/dataCenter/restURIs/userURI';

describe('UserURI unit tests', () => {

    test('Returns empty string if required param is not provided', () => {

        const mocked = jest.fn(UserURI);
        const payload = {};
        const expected = '';
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatch(expected);

    });

    test('Returns /resource string if resource param is provided', () => {

        const mocked = jest.fn(UserURI);
        const payload = {
            resource: 'sample'
        };
        const expected = '/sample';
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatch(expected);

    });

    test('Returns /resource/param string if params are provided', () => {

        const mocked = jest.fn(UserURI);
        const payload = {
            resource: 'sample',
            params: 'thing'
        };
        const expected = '/sample/thing';
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatch(expected);

    });

});

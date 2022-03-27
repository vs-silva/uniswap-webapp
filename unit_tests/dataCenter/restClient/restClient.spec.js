import RestClient from '../../../src/dataCenter/restClient';
import UserURI from '../../../src/dataCenter/restURIs/userURI';

describe('Rest Client unit tests', () => {

    test('Get throws error is required params is not provided', async () => {

        const mocked = jest.fn(RestClient.get);
        const expected = Error('ERROR::: URI must be provided :: REPORTED BY::: Get function - REST service');
        const result = await mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toMatchObject(expected);

    });

    test('Get fetches tokens data if required params are correctly provided', async () => {

        const mocked = jest.fn(RestClient.get);

        const payload = UserURI({
            resource: 'users',
            params: 'johndoe'
        });

        const result = await mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toBeDefined();

    });

    test('Get throws catch error is required params are wrongly provided', async () => {

        const mocked = jest.fn(RestClient.get);
        const expected = Error('ERROR::: Error: Request failed with status code 404 :: REPORTED BY::: Get function - REST service');
        const payload = UserURI({
            resource: 'user',
            params: 'johndoe'
        });

        const result = await mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

});

import UserEntity from '../../../src/dataCenter/entities/userEntity';

describe('UserEntity unit tests',() => {

    test('User entity is generated with default values',() => {

        const mocked = jest.fn(UserEntity);
        const expected = { id: '', name: '', bio: '', avatarURL: '' };
        const payload = {};
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);

    });

    test('User entity is generated if generated with provided values',() => {

        const mocked = jest.fn(UserEntity);
        const payload = { id: '1', name: 'John Doe', bio:'same bio info', avatarURL: 'someurl.com'};
        const result = mocked(payload);

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(payload);

    });

});

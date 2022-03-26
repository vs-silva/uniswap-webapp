import UserService from '../../../src/dataCenter/entitiesServices/userService';

describe('UserService unit tests',() => {

    test('Returns undefined if required param is not provided', () => {

        const mocked = jest.fn(UserService.convertDTOToEntity);
        const result = mocked();

        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith();
        expect(result).toBeUndefined();
    });

    test('Returns User entity if proper param is provided', () => {

        const mocked = jest.fn(UserService.convertDTOToEntity);

        const payload = {
            id: "123456",
            name: "John Doe",
            bio: "Some bio info",
            avatar_url: "some url",
            twitter_username: null,
            type: "User"
        };

        const expected =  {
            id: '123456',
            name: 'John Doe',
            bio: 'Some bio info',
            avatarURL: 'some url'
        };

        const result = mocked(payload);
        expect(mocked).toHaveBeenCalled();
        expect(mocked).toHaveBeenCalledTimes(1);
        expect(mocked).toHaveBeenCalledWith(payload);
        expect(result).toMatchObject(expected);
    });
});

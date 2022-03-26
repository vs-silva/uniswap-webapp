import UserEntity from '../entities/userEntity';

function convertDTOToEntity(userData) {

    if(!userData) {
        return;
    }

    return UserEntity({
        id: userData.id,
        name: userData.name,
        bio: userData.bio,
        avatarURL: userData.avatar_url
    });
}

export default {
    convertDTOToEntity
};

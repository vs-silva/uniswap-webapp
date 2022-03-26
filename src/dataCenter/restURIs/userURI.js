export default ({resource, params}) => {

    let result = '';

    if(!resource) {
        return result;
    }

    result += `/${resource}`;

    if(params) {
        result += `/${params}`;
    }

    return result;
};

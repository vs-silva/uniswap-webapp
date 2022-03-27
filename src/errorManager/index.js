function processError({error, reporter = null}) {
    if(!error) {
        return;
    }

    return (!reporter) ? Error(`ERROR::: ${error}`) : Error(`ERROR::: ${error} :: REPORTED BY::: ${reporter}`);
}

export default {
    processError
};

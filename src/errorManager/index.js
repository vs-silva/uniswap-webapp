function processError({error, reporter = null}) {
    if(!error) {
        return;
    }

    return (!reporter) ? new Error(`ERROR::: ${error}`) : new Error(`ERROR::: ${error} :: REPORTED BY::: ${reporter}`);
}

export default {
    processError
};

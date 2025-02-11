export default () => ({
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxFileSize: 400 * 1024 * 1024,
                },
            },
        },
    },
});

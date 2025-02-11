export default () => ({
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxFileSize: 1000 * 1024 * 1024,
                },
            },
        },
    },
});

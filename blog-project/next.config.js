const {PHASE_DEVELOPMENT_SERVER} =  require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'lulumosobe',
                mongodb_password: '6n0HXow6mHcmkNCQ',
                mongodb_clustername: 'cluster0',
                mongodb_database:'my-site-dev',
            },
        }
    }


    return {
        env: {
            mongodb_username: 'lulumosobe',
            mongodb_password: '6n0HXow6mHcmkNCQ',
            mongodb_clustername: 'cluster0',
            mongodb_database:'my-site',
        },
    };
}
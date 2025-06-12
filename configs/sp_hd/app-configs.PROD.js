export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://sp_hd_game_api_prod:5000",
        authUrl: "http://sp_hd_auth_api_prod:5000",
        client: {
            id: "game-server",
            secret: "gameserver@20luminet&",
        },
        useAuthenticate: true,
        placeBetTimeout: 4000,
        requestTimeout: 10000, // 10s
        hitJackpotTimeout: 200000,
        enabledApiLogs: true,
    },
    notificationServiceSettings: {
        url: "http://sp_hd_notification_service_prod:5000/api",
    },
    socketOptions: {
        pingInterval: 60 * 1000,
        pingTimeout: 60 * 1000,
        transports: ["websocket"],
        allowUpgrades: false,
        perMessageDeflate: false,
    },
    enabledLogs: true,
    database: {
        url: "mongodb://hotdog_backend:%3FD%60XWko0ZI99Y2PQ%5Eu%2E9LV%2BYv%2Emj6rhH@10.99.99.53:39510,10.99.99.54:39510,10.99.99.188:39510,10.99.99.187:39510/?replicaSet=SP-Main",
        options: {
            dbName: "hotdog_minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "http://f4980024f65945179a125e7ce17286d0@10.2.189.50:9009/178",
        logIdentifier: "fourguardians",
        env: "PROD",
    },
    authenticateSettings: {
        url: "http://sp_hd_auth_api_prod:5000",
        id: "game-services",
        secret: "gameservices@20luminet&",
        requestTimeout: 10000,
        useAuthenticate: true,
        audiences: ["api", "admin-api"],
    },
    userServiceSettings: {
        url: "http://sp_hd_user_service_prod:5000",
    },
    adminSecretKey: "asWDEer4yGdgsdqR4uqmKQZgh",
    freeSpinLiveSeconds: 86400, // 1 day
    bonusLiveSeconds: 125,
    metrics: {
        enable: true,
        secretKey: "30d15293-c7de-4c77-9293-b85d6c5bfe1a",
    },
    enableMsgpackParser: true,
    baseBetLevels: [40, 60, 400, 800, 5000, 10000, 15000, 20000, 25000, 50000, 60000, 70000, 80000, 90000, 100000],
    prefixServiceName: "hd"
};

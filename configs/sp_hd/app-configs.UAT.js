export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "http://sp-hd-game-api-uat-service:5000",
        authUrl: "http://sp-hd-auth-api-uat-service:5000",
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
        url: "http://sp-hd-notification-service-uat-service:5000/api",
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
        url: "mongodb://hotdog_backend:HotdogBackend%4022027@10.146.34.28:39520/?replicaSet=SP-UAT&appName=SP-Main",
        options: {
            dbName: "hotdog_minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    sentry: {
        sentryUrl: "http://f4980024f65945179a125e7ce17286d0@sentrysc-ovs.ops-kluat.gamora.prod/178",
        logIdentifier: "fourguardians",
        env: "UAT",
    },
    authenticateSettings: {
        url: "http://sp-hd-auth-api-uat-service:5000",
        id: "game-services",
        secret: "gameservices@20luminet&",
        requestTimeout: 10000,
        useAuthenticate: true,
        audiences: ["api", "admin-api"],
    },
    userServiceSettings: {
        url: "http://sp-hd-user-service-uat-service:5000",
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

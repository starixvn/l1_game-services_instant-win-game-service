export default {
    hostingPort: 5000,
    apiSettings: {
        enabledApi: true,
        apiUrl: "https://hd-api.lumigame.com",
        authUrl: "https://hd-auth.lumigame.com",
        client: {
            id: "game-server",
            secret: "gameserver@20luminet&",
        },
        useAuthenticate: false,
        requestTimeout: 10000,
        placeBetTimeout: 4000,
        hitJackpotTimeout: 200000,
        enableApiLogs: true,
    },
    socketOptions: {
        pingInterval: 60 * 1000,
        pingTimeout: 60 * 1000,
        transports: ["websocket"],
        allowUpgrades: false,
    },
    enabledLogs: true,
    database: {
        url: "mongodb://hotdog_backend:HotdogBackend@10.10.50.12:39400,10.10.50.13:39400,10.10.50.14:39400/?replicaSet=SPLocal0&appName=TapFortune",
        options: {
            dbName: "hotdog_minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    sentry: {
        sentryUrl: "https://81e47b9ef0c34ab08c30a8612d9a348e@sentry.lumigame.com/85",
        logIdentifier: "HD-TapFortune",
        env: "LOCAL",
    },
    authenticateSettings: {
        url: "https://hd-auth.lumigame.com",
        id: "game-services",
        secret: "gameservices@20luminet&",
        requestTimeout: 10000,
        useAuthenticate: true,
        audiences: ["api", "admin-api"],
    },
    userServiceSettings: {
        url: "https://hd-proxy.lumigame.com/user",
    },
    adminSecretKey: "asWDEerfOIdgsdqRTFabvmgh",
    freeSpinLiveSeconds: 86400, // 1 day
    bonusLiveSeconds: 125,
    jackpotLiveSeconds: 63,
    otel: {
        system: "DEV",
        enabled: false,
        endpoint: "http://10.10.50.69:14268/api/traces",
    },
    prefixServiceName: "hd",
};

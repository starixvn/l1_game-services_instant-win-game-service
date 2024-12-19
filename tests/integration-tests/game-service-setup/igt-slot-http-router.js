import { SlotHttpRouter } from "sc-instant-win-base/src/routers";

export default class IGTSlotHttpRouter extends SlotHttpRouter {
    init(app) {
        super.init(app);

        app.post("/igt-api/set-board", (_req, res) => this.handleSetBoard(_req.body, res));
    }
}

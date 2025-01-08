import { asClass } from "awilix";
import GameContainerRegistry from "../../../src/game-container-registry";
import IGTSlotHttpRouter from "./igt-slot-http-router";

export default class IGTSlotGameContainerRegistry extends GameContainerRegistry {
    registerRouters() {
        super.registerRouters();

        this.container.register({
            httpRouter: asClass(IGTSlotHttpRouter),
        });
    }
}

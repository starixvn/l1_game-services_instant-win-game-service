import awilix from "awilix";
import * as Slot from "sc-slot-game-base";
import { CurrencyGroupGames, rounds } from "./models";

const { asValue } = awilix;

export default class SlotGameContainerRegistry extends Slot.SlotContainerRegistry {
    registerModels() {
        const definition = this.container.resolve("definition");

        super.registerModels();

        this.container.register({
            roundsRepository: asValue(rounds(definition.configName)),
            currencyGroupGamesRepository: asValue(CurrencyGroupGames),
        });
    }
}

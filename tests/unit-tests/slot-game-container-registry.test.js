import * as Slot from "sc-instant-win-base";
import GameContainerRegistry from "../../src/game-container-registry";

jest.mock(
    "awilix",
    () => {
        return {
            asValue: jest.fn((t) => t),
            asClass: () => ({ singleton: () => ({ proxy: () => {} }) }),
            InjectionMode: jest.fn(() => {}),
            createContainer: jest.fn(() => {}),
        };
    },
    { virtual: true }
);

describe("extends", () => {
    it("should extend Slot.SlotContainerRegistry", () => {
        //Arrange
        const registry = new GameContainerRegistry();
        // Assert
        expect(registry instanceof Slot.SlotContainerRegistry);
    });
});

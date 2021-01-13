"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineController = void 0;
const contracts_1 = require("@/presentation/contracts");
class MachineController {
    constructor(createMachine) {
        this.createMachine = createMachine;
    }
    async handle(req) {
        try {
            console.log(req);
            const _ranking = await this.createMachine.create({ id: 0, name: 'Rafae;', code: 'TESTE' });
            return contracts_1.ok(_ranking);
        }
        catch (error) {
            return contracts_1.serverError(error);
        }
    }
}
exports.MachineController = MachineController;

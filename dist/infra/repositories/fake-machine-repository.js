"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeMachineRepository = void 0;
const data_sources_1 = require("@/infra/data-sources");
class FakeMachineRepository {
    async create(machineModel) {
        return data_sources_1.machine;
    }
}
exports.FakeMachineRepository = FakeMachineRepository;

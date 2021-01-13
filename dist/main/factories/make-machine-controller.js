"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadLastRankingController = void 0;
const services_1 = require("@/data/services");
const repositories_1 = require("@/infra/repositories");
const controllers_1 = require("@/presentation/controllers");
const makeLoadLastRankingController = () => {
    const repo = new repositories_1.FakeMachineRepository();
    const loader = new services_1.CreateMachineService(repo);
    return new controllers_1.MachineController(loader);
};
exports.makeLoadLastRankingController = makeLoadLastRankingController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMachineService = void 0;
// import { Machine } from "@/domain/entities/machine";
class CreateMachineService {
    constructor(machineRepository) {
        this.machineRepository = machineRepository;
    }
    async create(machine) {
        return this.machineRepository.create(machine);
    }
}
exports.CreateMachineService = CreateMachineService;

import { Machine } from '@/domain/entities';
import { CreateMachine } from '@/domain/usecases';
import { MachineRepository } from '@/data/contracts/machine-repository';
// import { Machine } from "@/domain/entities/machine";

export class CreateMachineService implements CreateMachine {
  constructor(private readonly machineRepository: MachineRepository) {}

  async create(machine: Machine): Promise<Machine> {
    return this.machineRepository.create(machine);
  }
}

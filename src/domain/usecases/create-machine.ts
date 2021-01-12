import { Machine } from "@/domain/entities/machine";

export interface CreateMachine {
    create: (machine: Machine) => Promise<Machine>
}
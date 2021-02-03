import { CreateMachineService } from '@/data/services';
import { FakeMachineRepository } from '@/infra/repositories';
import { MachineController } from '@/presentation/controllers';
import { Controller } from '@/presentation/contracts';

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeMachineRepository();
  const loader = new CreateMachineService(repo);
  return new MachineController(loader);
};

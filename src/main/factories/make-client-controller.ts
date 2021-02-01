import { CreateClientService } from "@/data/services";
import { FakeClientRepository } from "@/infra/repositories";
import { ClientController } from "@/presentation/controllers";
import { Controller } from "@/presentation/contracts";

export const makeClientController = (): Controller => {
  const repo = new FakeClientRepository();
  const loader = new CreateClientService(repo);
  return new ClientController(loader);
};

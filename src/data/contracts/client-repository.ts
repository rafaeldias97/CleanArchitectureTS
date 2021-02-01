import { ClientModel } from "@/data/models";

export interface ClientRepository {
  create: (machineModel: ClientModel) => Promise<ClientModel>;
}

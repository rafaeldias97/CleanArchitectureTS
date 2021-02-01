import { Client } from "@/domain/entities";
import { CreateClient } from "@/domain/usecases";
import { ClientRepository } from "../contracts";
export class CreateClientService implements CreateClient {
  constructor(private readonly clientRepository: ClientRepository) {}
  async create(client: Client): Promise<Client> {
    return this.clientRepository.create(client);
  }
}

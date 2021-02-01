import { ClientRepository } from "@/data/contracts";
import { ClientModel } from "@/data/models";
import { Client } from "@/domain/entities";
import { MongoHelper } from "../data-sources";

export class FakeClientRepository implements ClientRepository {
  async create(clientModel: ClientModel): Promise<ClientModel> {
    const clientCollection = await MongoHelper.getCollection("client");
    const clientReturn = await clientCollection.insertOne(clientModel);
    return clientReturn.ops[0];
  }
}

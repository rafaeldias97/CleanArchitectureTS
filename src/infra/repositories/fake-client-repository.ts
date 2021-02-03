import { ClientRepository } from '@/data/contracts';
import { ClientModel } from '@/data/models';
import { MongoHelper } from '../data-sources';

export class FakeClientRepository implements ClientRepository {
  mongoHelper;

  constructor() {
    this.mongoHelper = MongoHelper;
  }

  async create(clientModel: ClientModel): Promise<ClientModel> {
    const clientCollection = await this.mongoHelper.getCollection('client');
    const clientReturn = await clientCollection.insertOne(clientModel);
    return clientReturn.ops[0];
  }
}

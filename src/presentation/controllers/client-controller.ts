import { CreateClient } from '@/domain/usecases';
import {
  Controller,
  HttpResponse,
  ok,
  serverError,
} from '@/presentation/contracts';
import { CreateClientViewModel } from '@/presentation/view-models';

export class ClientController implements Controller {
  constructor(private readonly createClient: CreateClient) {}

  async handle(req): Promise<HttpResponse<CreateClientViewModel>> {
    try {
      const client = await this.createClient.create({
        id: 1,
        name: 'Rafael Dias',
        age: 23,
        measures: [
          {
            weight: 74.0,
            height: 1.8,
            bf: 5,
            date: new Date(),
            additional: {
              chest: 0,
              neck: 0,
              arm: 0,
              forearm: 0,
              waist: 0,
              hips: 0,
              calf: 0,
            },
          },
        ],
        photos: [
          {
            date: new Date(),
            url:
              'https://www.greatestphysiques.com/wp-content/uploads/2019/04/Renato-Cariani.09.jpg',
          },
        ],
      });
      return ok(client);
    } catch (error) {
      return serverError(error);
    }
  }
}

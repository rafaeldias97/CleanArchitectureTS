import { Client } from '@/domain/entities/client';

export interface CreateClient {
  create: (client: Client) => Promise<Client>;
}

import { HttpResponse } from '@/presentation/contracts';

export interface Controller {
  handle: (any) => Promise<HttpResponse>;
}

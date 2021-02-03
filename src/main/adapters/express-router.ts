import { Controller } from '@/presentation/contracts';

import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(req);
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};

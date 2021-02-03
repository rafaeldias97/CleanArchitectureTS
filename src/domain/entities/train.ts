import { Machine } from '@/domain/entities/machine';

export type Train = {
  type: string;
  exercices: Machine[];
  personalId: number;
  clientId: number;
};

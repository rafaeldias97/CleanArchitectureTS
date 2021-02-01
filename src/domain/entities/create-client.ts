export type CreateClientViewModel = {
  id: number;
  name: string;
  age: number;
  weight: CreateMeasureViewModel[];
  photos: CreatePhotographViewModel[];
};

type CreateMeasureViewModel = {
  height: number;
  weight: number;
  bf: number;
  additional: CreateAdditionalMeasureViewModel;
  date: Date;
};

type CreateAdditionalMeasureViewModel = {
  chest: number;
  neck: number;
  arm: number;
  forearm: number;
  waist: number;
  hips: number;
  calf: number;
};

type CreatePhotographViewModel = {
  date: Date;
  url: string;
};

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

type CreateMeasureViewModel = {
  height: number;
  weight: number;
  bf: number;
  additional: CreateAdditionalMeasureViewModel;
  date: Date;
};

export type CreateClientViewModel = {
  id: number;
  name: string;
  age: number;
  measures: CreateMeasureViewModel[];
  photos: CreatePhotographViewModel[];
};

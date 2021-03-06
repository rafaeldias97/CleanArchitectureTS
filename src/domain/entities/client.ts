type AdditionalMeasure = {
  chest: number;
  neck: number;
  arm: number;
  forearm: number;
  waist: number;
  hips: number;
  calf: number;
};

type Photograph = {
  date: Date;
  url: string;
};

type Measure = {
  height: number;
  weight: number;
  bf: number;
  additional: AdditionalMeasure;
  date: Date;
};

export type Client = {
  id: number;
  name: string;
  age: number;
  measures: Measure[];
  photos: Photograph[];
};

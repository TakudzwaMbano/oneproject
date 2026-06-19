export interface PricingRow {
  width: string;
  length: string;
  flatRoof: string;
  pitchedRoof: string;
}

export interface PricingData {
  title: string;
  rows: PricingRow[];
}

export const nutecHousesPricing: PricingData = {
  title: 'Nutec Houses',
  rows: [
    {
      width: '2m',
      length: '2m',
      flatRoof: 'R15000',
      pitchedRoof: 'R16000',
    },
    {
      width: '2.4m',
      length: '2.4m',
      flatRoof: 'R17000',
      pitchedRoof: 'R18000',
    },
    {
      width: '2.4m',
      length: '3m',
      flatRoof: 'R18000',
      pitchedRoof: 'R19000',
    },
    {
      width: '3m',
      length: '3m',
      flatRoof: 'R20000',
      pitchedRoof: 'R21000',
    },
    {
      width: '3m',
      length: '4m',
      flatRoof: 'R22000',
      pitchedRoof: 'R23000',
    },
    {
      width: '3m',
      length: '6m',
      flatRoof: 'R26000',
      pitchedRoof: 'R27000',
    },
    {
      width: '3m',
      length: '9m',
      flatRoof: 'R35000',
      pitchedRoof: 'R36000',
    },
    {
      width: '3m',
      length: '12m',
      flatRoof: 'R42000',
      pitchedRoof: 'R43000',
    },
    {
      width: '4m',
      length: '6m',
      flatRoof: 'R30000',
      pitchedRoof: 'R31000',
    },
    {
      width: '6m',
      length: '6m',
      flatRoof: 'R38000',
      pitchedRoof: 'R39000',
    },
    {
      width: '6m',
      length: '9m',
      flatRoof: 'R50000',
      pitchedRoof: 'R52000',
    },
    {
      width: '6m',
      length: '12m',
      flatRoof: 'R56000',
      pitchedRoof: 'R58000',
    },
    {
      width: '9m',
      length: '9m',
      flatRoof: 'R58000',
      pitchedRoof: 'R60000',
    },
  ],
};

export const overlappingNutecWendyPricing: PricingData = {
  title: 'Overlapping Nutec Wendy Houses',
  rows: [
    {
      width: '2m',
      length: '2m',
      flatRoof: 'R17000',
      pitchedRoof: 'R17500',
    },
    {
      width: '2.4m',
      length: '2.4m',
      flatRoof: 'R18000',
      pitchedRoof: 'R19000',
    },
    {
      width: '2.4m',
      length: '3m',
      flatRoof: 'R20000',
      pitchedRoof: 'R21000',
    },
    {
      width: '3m',
      length: '3m',
      flatRoof: 'R22000',
      pitchedRoof: 'R23000',
    },
    {
      width: '3m',
      length: '4m',
      flatRoof: 'R25000',
      pitchedRoof: 'R27000',
    },
    {
      width: '3m',
      length: '6m',
      flatRoof: 'R28000',
      pitchedRoof: 'R30000',
    },
    {
      width: '3m',
      length: '9m',
      flatRoof: 'R36000',
      pitchedRoof: 'R38000',
    },
    {
      width: '3m',
      length: '12m',
      flatRoof: 'R45000',
      pitchedRoof: 'R48000',
    },
    {
      width: '6m',
      length: '6m',
      flatRoof: 'R54000',
      pitchedRoof: 'R56000',
    },
    {
      width: '6m',
      length: '9m',
      flatRoof: 'R62000',
      pitchedRoof: 'R65000',
    },
    {
      width: '9m',
      length: '9m',
      flatRoof: 'R78000',
      pitchedRoof: 'R80000',
    },
  ],
};

export const wendyHousesPricing: PricingData = {
  title: 'Wooden Wendy Houses',
  rows: [
    {
      width: '2m',
      length: '2m',
      flatRoof: 'R12000',
      pitchedRoof: 'R12500',
    },
    {
      width: '2.4m',
      length: '2.4m',
      flatRoof: 'R13000',
      pitchedRoof: 'R13500',
    },
    {
      width: '2.4m',
      length: '3m',
      flatRoof: 'R13000',
      pitchedRoof: 'R13500',
    },
    {
      width: '3m',
      length: '3m',
      flatRoof: 'R14500',
      pitchedRoof: 'R15000',
    },
    {
      width: '3m',
      length: '4m',
      flatRoof: 'R16000',
      pitchedRoof: 'R16500',
    },
    {
      width: '3m',
      length: '6m',
      flatRoof: 'R18000',
      pitchedRoof: 'R18500',
    },
    {
      width: '3m',
      length: '9m',
      flatRoof: 'R25000',
      pitchedRoof: 'R25500',
    },
    {
      width: '3m',
      length: '12m',
      flatRoof: 'R32000',
      pitchedRoof: 'R33000',
    },
    {
      width: '4m',
      length: '6m',
      flatRoof: 'R24000',
      pitchedRoof: 'R24500',
    },
    {
      width: '6m',
      length: '6m',
      flatRoof: 'R30000',
      pitchedRoof: 'R31000',
    },
    {
      width: '6m',
      length: '9m',
      flatRoof: 'R40000',
      pitchedRoof: 'R42000',
    },
    {
      width: '6m',
      length: '12m',
      flatRoof: 'R45000',
      pitchedRoof: 'R47000',
    },
    {
      width: '9m',
      length: '9m',
      flatRoof: 'R48000',
      pitchedRoof: 'R50000',
    },
  ],
};

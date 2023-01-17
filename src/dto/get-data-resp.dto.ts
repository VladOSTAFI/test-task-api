export enum CODES {
  G = 'G',
  N = 'N',
  GN = 'GN',
}

export class GetDataRespDto {
  code: CODES | number;
}
import { Injectable } from '@nestjs/common';
import { CODES } from './dto/get-data-resp.dto';

@Injectable()
export class AppService {
  getCode(int: number): CODES | number {
    const isMultipleOfThree = this.checkIsMultipleOfThree(int);
    const isMultipleOfFive = this.checkIsMultipleOfFive(int);

    if (isMultipleOfThree && isMultipleOfFive) {
      return CODES.GN;
    }

    if (isMultipleOfThree) {
      return CODES.G;
    }

    if (isMultipleOfFive) {
      return CODES.N;
    }

    return int;
  }

  private checkIsMultipleOfThree(int: number): boolean {
    return int % 3 === 0;
  }

  private checkIsMultipleOfFive(int: number): boolean {
    return int % 5 === 0;
  }
}

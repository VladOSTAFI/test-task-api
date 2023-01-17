import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { CODES } from './dto/get-data-resp.dto';

describe('Given AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get(AppService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('When getCode is called', () => {
    describe('And passed int equals to 7', () => {
      const INT = 7;

      it('Then correct result is returned', () => {
        expect(appService.getCode(INT)).toEqual(INT);
      });
    });

    describe('And passed int equals to 9', () => {
      const INT = 9;

      it('Then correct result is returned', () => {
        expect(appService.getCode(INT)).toEqual(CODES.G);
      });
    });

    describe('And passed int equals to 25', () => {
      const INT = 25;

      it('Then correct result is returned', () => {
        expect(appService.getCode(INT)).toEqual(CODES.N);
      });
    });

    describe('And passed int equals to 15', () => {
      const INT = 15;

      it('Then correct result is returned', () => {
        expect(appService.getCode(INT)).toEqual(CODES.GN);
      });
    });
  });
});

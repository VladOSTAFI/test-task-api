import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('Given AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: AppService,
        useValue: { getCode: jest.fn() }
      }],
    }).compile();

    appController = app.get(AppController);
    appService = app.get(AppService);
  });

  describe('When getData is called', () => {
    const INT = 7;

    beforeEach(() => {
      appController.getData(INT);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Then appService.getCode is called once', () => {
      expect(appService.getCode).toHaveBeenCalledTimes(1);
    });

    it('Then appService.getCode is called with correct args', () => {
      expect(appService.getCode).toHaveBeenCalledWith(INT);
    });
  });
});

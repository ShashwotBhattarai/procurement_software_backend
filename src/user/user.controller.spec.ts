import { Test } from '@nestjs/testing';
import { RequirementController } from './user.controller';
import { RequirementService } from './user.service';
import { UserModule } from './user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credentials } from '../entities/credentials.entity';
import { Repository } from 'typeorm';

describe('UserController', () => {
  let requirementController: RequirementController;
  let requirementService: RequirementService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule, TypeOrmModule.forFeature([Credentials])],
      controllers: [RequirementController],
      providers: [RequirementService, Repository<Credentials>],
    }).compile();

    requirementService = moduleRef.get<RequirementService>(RequirementService);
    requirementController = moduleRef.get<RequirementController>(
      RequirementController,
    );
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const dataArray = [
        {
          id: '20f07483-4382-4407-a4e8-36620d081e40',
          requirement_date: new Date('2023-08-19T15:34:20.000Z'),
          requirement_quantity: 50,
          requirement_delivery_date: new Date('2023-08-20T18:15:00.000Z'),
          item_id: 'ad8a9b84-a97b-498c-bcc7-3e34124f51f3', // Directly provide the item_id UUID
          site_id: '5dd7c9b9-cf1b-421b-b2a6-fbaa5b89a466', // Directly provide the site_id UUID
        },
        {
          id: '965c2faa-411c-486a-9e70-6162c665293d',
          requirement_date: new Date('2023-08-19T15:34:20.000Z'),
          requirement_quantity: 6,
          requirement_delivery_date: new Date('2023-08-22T18:15:00.000Z'),
          item_id: 'ad8a9b84-a97b-498c-bcc7-3e34124f51f3', // Directly provide the item_id UUID
          site_id: '5dd7c9b9-cf1b-421b-b2a6-fbaa5b89a466', // Directly provide the site_id UUID
        },
      ];

      jest.spyOn(requirementService, 'findAll').mockResolvedValue(dataArray);

      expect(await requirementController.findAll()).toEqual(dataArray);
    });
  });
});

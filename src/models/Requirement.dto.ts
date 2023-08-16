import { IsNotEmpty, IsNumber } from 'class-validator';
import { UUID } from 'crypto';

export class RequirementDto {
  site_id: UUID;
  item_id: UUID;
  @IsNumber({}, { message: ' message: requirement quantity must be a number' })
  @IsNotEmpty({ message: 'requirement quantity cant be empty' })
  requirement_quantity: number;
  requirement_delivery_date: Date;
}

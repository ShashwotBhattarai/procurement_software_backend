import { IsNotEmpty, IsString } from 'class-validator';

export class ItemsDto {
  @IsNotEmpty({ message: 'item name must not be empty' })
  @IsString({ message: 'item name must be string' })
  item_name: string;
  @IsString({ message: 'item Spec must be string' })
  @IsNotEmpty({ message: 'item spec must not be empty' })
  item_specification: string;
  @IsString({ message: 'item make must be string' })
  @IsNotEmpty({ message: 'item make must not be empty' })
  item_make: string;
  @IsString({ message: 'item unit must be string' })
  @IsNotEmpty({ message: 'item unit must not be empty' })
  item_unit: string;
}

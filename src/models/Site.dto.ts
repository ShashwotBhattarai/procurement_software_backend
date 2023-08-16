import { IsNotEmpty, IsString } from 'class-validator';

export class SiteDto {
  @IsNotEmpty({ message: 'Site name must not be empty' })
  @IsString({ message: 'Site name must be string' })
  site_name: string;
  @IsNotEmpty({ message: 'Site location must not be empty' })
  @IsString({ message: 'Site location must be string' })
  site_location: string;
  @IsNotEmpty({ message: 'Site manager name must not be empty' })
  @IsString({ message: 'Site manager name must be string' })
  site_manager_name: string;
}

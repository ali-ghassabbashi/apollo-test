import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { GenderEnum } from '../../constants';

@Entity({
  schema: 'person',
  name: 'Users'
})
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: 'uuid' })
  id: string;

  @Column()
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @Column({ type: 'enum', enum: GenderEnum })
  @ApiProperty({ type: 'enum', enum: GenderEnum })
  @IsEnum(GenderEnum)
  @IsNotEmpty()
  gender: GenderEnum;

  @Column()
  @ApiProperty({ type: 'string' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @ApiPropertyOptional({ type: 'string', default: null })
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  phone?: string;

}

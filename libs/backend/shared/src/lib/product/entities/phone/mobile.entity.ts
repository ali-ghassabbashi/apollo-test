import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MobileBrandEnum } from '../../constants';

@Entity({
  name: 'Mobiles',
  schema: 'phone'
})
export class MobileEntity {

  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ type: 'uuid' })
  id: string;

  @Column({ type: 'enum', enum: MobileBrandEnum })
  @ApiProperty({ type: 'enum', enum: MobileBrandEnum })
  @IsEnum(MobileBrandEnum)
  @IsNotEmpty()
  brand: MobileBrandEnum;

  @Column()
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @Column({ nullable: true })
  @ApiPropertyOptional({ type: 'string', nullable: true })
  @IsString()
  color?: string;

  @Column({ type: 'float', nullable: true })
  @ApiPropertyOptional({ type: 'float', nullable: true })
  @IsNumber({ maxDecimalPlaces: 2 })
  screenSize: number;

  @Column({ type: 'integer', nullable: true })
  @ApiPropertyOptional({ type: 'integer', nullable: true })
  @IsNumber({ maxDecimalPlaces: 0 })
  storage: number;

  @Column({ type: 'integer', nullable: true })
  @ApiPropertyOptional({ type: 'integer', nullable: true })
  @IsNumber({ maxDecimalPlaces: 0 })
  ram: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  @ApiPropertyOptional({ type: 'integer', nullable: true })
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @Column({ default: true })
  @ApiProperty({ type: 'boolean', default: true })
  @IsBoolean()
  isAvailable: boolean;
}

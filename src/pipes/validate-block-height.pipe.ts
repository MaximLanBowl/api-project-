import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateBlockHeightPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException(`Invalid value for "${metadata.data}"`);
    }
    const height = parseInt(value, 10);
    if (isNaN(height) || height <= 0) {
      throw new BadRequestException(`Invalid block height: ${value}`);
    }
    return height;
  }
}
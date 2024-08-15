import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateTransactionHashPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value || value.length !== 64) {
      throw new BadRequestException(`Invalid transaction hash: ${value}`);
    }
    return value;
  }
}
import { Controller, Get, Param } from '@nestjs/common';
import { EvmService } from './evm.service';
import { ValidateBlockHeightPipe } from '../pipes/validate-block-height.pipe';
import { ValidateTransactionHashPipe } from '../pipes/validate-transaction-hash.pipe';

@Controller('evm')
export class EvmController {
  constructor(private readonly evmService: EvmService) {}

  @Get('block/:height')
  async getBlock(@Param('height', ValidateBlockHeightPipe) height: string) {
    return this.evmService.getBlock(height);
  }

  @Get('transactions/:hash')
  async getTransaction(@Param('hash', ValidateTransactionHashPipe) hash: string) {
    return this.evmService.getTransaction(hash);
  }
}
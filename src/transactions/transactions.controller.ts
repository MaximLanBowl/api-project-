import { Controller, Get, Param } from '@nestjs/common';
import { CosmosService } from '../cosmos/cosmos.service';
import { EvmService } from '../evm/evm.service';
import { ValidateTransactionHashPipe } from '../pipes/validate-transaction-hash.pipe';

@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly evmService: EvmService,
    private readonly cosmosService: CosmosService,
  ) {}

  @Get('evm/:hash')
  async getEvmTransaction(@Param('hash', ValidateTransactionHashPipe) hash: string) {
    return this.evmService.getTransaction(hash);
  }

  @Get('cosmos/:hash')
  async getCosmosTransaction(@Param('hash', ValidateTransactionHashPipe) hash: string) {
    return this.cosmosService.getTransaction(hash);
  }
}
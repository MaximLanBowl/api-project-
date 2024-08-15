import { Injectable } from '@nestjs/common';
import axios from 'axios';

const RPC_URL = 'https://api.cosmos.network/';

@Injectable()
export class CosmosService {
  async getBlock(height: string): Promise<any> {
    const response = await axios.get(`${RPC_URL}blocks/${height}`);
    const blockInfo = response.data.block;
    return {
      height: blockInfo.header.height,
      time: blockInfo.header.time,
      hash: blockInfo.header.last_block_id.hash,
      proposedAddress: blockInfo.header.proposer_address,
    };
  }

  async getTransaction(hash: string): Promise<any> {
    const response = await axios.get(`${RPC_URL}txs/${hash}`);
    const txInfo = response.data.tx;
    return {
      hash: hash,
      height: txInfo.height,
      time: txInfo.timestamp,
      gasUsed: txInfo.gas_used,
      gasWanted: txInfo.gas_wanted,
      fee: txInfo.fee,
      sender: txInfo.from_address,
    };
  }
}
import { Injectable } from '@nestjs/common';
import axios from 'axios';

const RPC_URL = 'https://haqq-evm.publicnode.com/';

@Injectable()
export class EvmService {
    async getBlock(height: string): Promise<any> {
        const response = await axios.post(RPC_URL, {
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [height, false],
            id: 1
        });
        const blockInfo = response.data.result;
        return {
            height: blockInfo.number,
            hash: blockInfo.hash,
            parentHash: blockInfo.parentHash,
            gasLimit: blockInfo.gasLimit,
            gasUsed: blockInfo.gasUsed,
            size: blockInfo.size,
        };
    }
    async getTransaction(hash: string): Promise<any> {
        const response = await axios.post(RPC_URL, {
            jsonrpc: "2.0",
            method: "eth_getTransactionByHash",
            params: [hash],
            id: 1
        });
        const txInfo = response.data.result;
        return {
            hash: txInfo.hash,
            to: txInfo.to,
            from: txInfo.from,
            value: txInfo.value,
            input: txInfo.input,
            maxFeePerGas: txInfo.maxFeePerGas,
            maxPriorityFeePerGas: txInfo.maxPriorityFeePerGas,
            gasPrice: txInfo.gasPrice,
        };
    }
}

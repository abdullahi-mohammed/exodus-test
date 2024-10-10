import { ethers } from 'ethers';
import { abi, contractAddress } from '../config.js';

export const getTotalSupply = async (req, res, next) => {
    try {
        const provider = new ethers.providers.JsonRpcProvider(process.env.CHAINSTACK);

        const contract = new ethers.Contract(
            contractAddress,
            abi,
            provider
        );

        const totalSupply = await contract.totalSupply();
        console.log('Total Supply:', Number(ethers.utils.formatUnits(totalSupply, 18)).toFixed(2));
        res.status(200).json({
            status: 200,
            message: 'Get DAI Total Supply Successfully',
            data: { daiTotalSupply: Number(ethers.utils.formatUnits(totalSupply, 18)).toFixed(2) },
        });

    } catch (error) {
        console.log(error, 'error getting DAI total supply');
        res.status(401).json({ message: 'error getting DAI total supply', error: error, status: 401 })
    }
};
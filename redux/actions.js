import * as types from "./types"

export const web3Loaded = (web3) =>{
    return{
        type:types.WEB3_LOADED,
        payload:web3
    }
}

export const nftContractLoaded = (contract) =>{
    return{
        type:types.NFT_CONTRACT_LOADED,
        payload:contract
    }
}

export const nftMarketplaceContractLoaded = (contract) =>{
    return{
        type:types.NFT_MARKETPLACE_CONTRACT_LOADED,
        payload:contract
    }
}
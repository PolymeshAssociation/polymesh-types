export default {
  rpc: {
    transferReport: {
      description:
        "Returns a vector containing all errors for the transfer. An empty vec means there's no error.",
      params: [
        {
          name: 'sender',
          type: 'AssetHolder',
          isOptional: false,
        },
        {
          name: 'receiver',
          type: 'AssetHolder',
          isOptional: false,
        },
        {
          name: 'asset_id',
          type: 'PolymeshAssetId',
          isOptional: false,
        },
        {
          name: 'transfer_value',
          type: 'Balance',
          isOptional: false,
        },
        {
          name: 'skip_locked_check',
          type: 'bool',
          isOptional: false,
        },
        {
          name: 'blockHash',
          type: 'Hash',
          isOptional: true,
        },
      ],
      type: 'Vec<DispatchError>',
    },
  },
  types: {},
};

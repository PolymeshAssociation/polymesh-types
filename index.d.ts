declare const _default: {
    types: Record<string, any>;
    rpc: Record<string, Record<string, RpcFunctionDefinition>>;
};
export default _default;
export interface RpcFunctionDefinition {
    description: string;
    params: Array<{
        name: string;
        type: string;
        isOptional: boolean;
    }>;
    type: string;
}

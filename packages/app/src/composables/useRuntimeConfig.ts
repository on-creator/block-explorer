import type { NetworkConfig, RuntimeConfig } from "@/configs";

import { checksumAddress } from "@/utils/formatters";
export const DEFAULT_NETWORK: NetworkConfig = {
  groupId: "creator-chain",
  apiUrl: "https://explorer-api.testnet.oncreator.com",
  verificationApiUrl: "https://explorer-api.testnet.oncreator.com/api",
  bridgeUrl: "",
  hostnames: [],
  icon: "/images/icons/creator-chain.svg",
  l1ExplorerUrl: "https://sepolia.etherscan.io",
  l2ChainId: 278701,
  l2NetworkName: "Creator Chain Testnet",
  maintenance: false,
  name: "testnet",
  published: true,
  rpcUrl: "https://rpc.testnet.oncreator.com",
  baseTokenAddress: checksumAddress("0x000000000000000000000000000000000000800A"),
};

export default (): RuntimeConfig => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const runtimeConfig = window && window["##runtimeConfig"];

  return {
    version: import.meta.env?.VITE_VERSION || "localhost",
    sentryDSN: runtimeConfig?.sentryDSN || import.meta.env?.VITE_SENTRY_DSN,
    appEnvironment: runtimeConfig?.appEnvironment || import.meta.env?.VITE_APP_ENVIRONMENT || "default",
    environmentConfig: runtimeConfig?.environmentConfig,
  };
};

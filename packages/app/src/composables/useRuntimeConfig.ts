import type { NetworkConfig, RuntimeConfig } from "@/configs";

import { checksumAddress } from "@/utils/formatters";
export const DEFAULT_NETWORK: NetworkConfig = {
  groupId: "creator-chain",
  apiUrl: "https://explorer-api.testnet.oncreator.com",
  verificationApiUrl: "https://explorer-api.testnet.oncreator.com/api",
  bridgeUrl: "",
  hostnames: ["https://explorer.testnet.oncreator.com"],
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
    brandName: runtimeConfig?.brandName || import.meta.env?.VITE_BRAND_NAME || "Creator",
    appEnvironment: runtimeConfig?.appEnvironment || import.meta.env?.VITE_APP_ENVIRONMENT || "default",
    links: {
      discordUrl: runtimeConfig?.links?.discordUrl || import.meta.env?.VITE_DISCORD_URL || "https://discord.gg/oncreator",
      xUrl: runtimeConfig?.links?.xUrl || import.meta.env?.VITE_X_URL || "https://x.com/oncreator_",
      docsUrl:
        runtimeConfig?.links?.docsUrl ||
        import.meta.env?.VITE_DOCS_URL ||
        "https://docs.zksync.io/zksync-network/tooling/block-explorers",
      termsOfServiceUrl:
        runtimeConfig?.links?.termsOfServiceUrl ||
        import.meta.env?.VITE_TERMS_OF_SERVICE_URL ||
        "https://zksync.io/terms",
      contactUsUrl:
        runtimeConfig?.links?.contactUsUrl || import.meta.env?.VITE_CONTACT_US_URL || "https://zksync.io/contact",
    },
    environmentConfig: runtimeConfig?.environmentConfig,
    theme: runtimeConfig?.theme || JSON.parse(import.meta.env?.VITE_THEME_CONFIG || "{}"),
  };
};

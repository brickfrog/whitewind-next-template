import { CredentialManager, XRPC } from "@atcute/client";

export const MY_DID = "did:plc:fmnwe2six767bnsxd7qcr55x";
export const MY_PDS = "https://bsky.social";

const handler = new CredentialManager({ service: MY_PDS, fetch });
export const bsky = new XRPC({ handler });

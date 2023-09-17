import * as v0_1_3 from "./lib/tgcrypto@0.1.3.ts";
import * as v0_2_0 from "./lib/tgcrypto@0.2.0.ts";

await Promise.all([
  v0_1_3.init(),
  v0_2_0.init(),
]);

Deno.bench("[CTR] 0.1.3", () => {
  v0_1_3.ctr256Encrypt(
    new Uint8Array(100),
    new Uint8Array(32),
    new Uint8Array(16),
    new Uint8Array(1),
  );
});

Deno.bench("[CTR] 0.2.0", () => {
  v0_2_0.ctr256Encrypt(
    new Uint8Array(100),
    new Uint8Array(32),
    new Uint8Array(16),
    new Uint8Array(1),
  );
});

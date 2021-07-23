import { ISealedSecret } from "@kubernetes-models/sealed-secrets/bitnami.com/v1alpha1/SealedSecret";

export interface Options {
  context: string;
  namespace: string;
  name: string;
  secrets: Record<string, string>;
}

export function createSealedSecret(options: Options): Promise<ISealSecret>;
export function crypt(options: Omit<Options, secrets>): Promise<string>;
export function cryptFromSecrets(options: Options): Promise<ISealSecret>;

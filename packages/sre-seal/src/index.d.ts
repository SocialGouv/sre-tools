export interface Options {
  context: string;
  namespace: string;
  name: string;
  secrets: Record<string, string>;
}

export interface ISealSecret {
  apiVersion: "bitnami.com/v1alpha1";
  kind: "SealedSecret";
  metadata: {
    annotations: Record<string, string>;
    name: string;
    namespace: string;
  };
  spec: {
    encryptedData: Record<string, string>;
    template: {
      metadata: {
        annotations: Record<string, string>;
        name: string;
      };
      type: "Opaque";
    };
  };
}

export function createSealedSecret(options: Options): Promise<ISealSecret>;
export function crypt(options: Omit<Options, secrets>): Promise<string>;
export function cryptFromSecrets(options: Options): Promise<ISealSecret>;

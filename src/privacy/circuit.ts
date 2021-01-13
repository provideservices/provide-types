import { Model } from '../model';

export type Circuit = Model & {
  artifacts?: object;
  name: string;
  description?: string;
  identifier: string;
  provider: string;
  type?: string;
  curve?: string;
  provingScheme?: string;
  provingKeyId?: string;
  verifyingKeyId?: string;
  verifierContract?: object;
};

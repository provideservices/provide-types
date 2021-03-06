import { LoadBalancer } from './loadbalancer';
import { Model } from '../model';
import { Node } from './node';

export type Connector = Model & {
  networkId: string;
  applicationId?: string;
  organizationId?: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  config?: ConnectorConfig;
  accessedAt?: string;

  details?: ConnectorDetails;

  loadBalancers?: LoadBalancer[];
  nodes?: Node[];
};

export interface ConnectorConfig {
  container: string;
  credentials?: { [key: string]: any };
  engineId?: string;
  env?: { [key: string]: any };
  providerId?: string;
  region?: string;
  role?: string;
  targetId?: string;
}

export interface ConnectorDetails {
  page?: number;
  rpp?: number;
  data: any;
}

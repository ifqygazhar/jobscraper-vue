import type { job } from "./job_type";

export interface GlintsResponse {
  data: {
    jobs: job[];
  };
  message: string;
  status: string;
}

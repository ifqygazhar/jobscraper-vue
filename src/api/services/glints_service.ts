import { glints } from "../endpoint";
import type { GlintsResponse } from "../type/glints_type";
import { apiClient } from "./job_service";

export const glintsService = {
  async getGlintsJobs(params?: {
    page?: number;
    work?: string;
    location_name?: string;
    location_id?: string;
    option_work?: string;
    job_type?: string;
  }): Promise<GlintsResponse> {
    const { data } = await apiClient.get<GlintsResponse>(glints, {
      params,
    });
    return data;
  },
};

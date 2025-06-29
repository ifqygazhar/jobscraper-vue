import { defineStore } from "pinia";
import { ref } from "vue";
import type { job } from "../api/type/job_type";
import type { GlintsResponse } from "../api/type/glints_type";
import { glintsService } from "../api/services/glints_service";

export const glintStore = defineStore("glints", () => {
  const jobs = ref<job[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const page = ref(1);

  const fetchJobs = async (params: {
    page?: number;
    location_name?: string;
    work?: string;
  }) => {
    loading.value = true;
    error.value = null;

    try {
      const response: GlintsResponse = await glintsService.getGlintsJobs(
        params
      );
      if (response.status === "success") {
        jobs.value = response.data.jobs;
      } else {
        throw new Error(response.message || "Failed to fetch jobs");
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "An error occurred";
      jobs.value = [];
    } finally {
      loading.value = false;
    }
  };

  return {
    jobs,
    loading,
    error,
    page,
    fetchJobs,
  };
});

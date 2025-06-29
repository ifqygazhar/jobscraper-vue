import { defineStore } from "pinia";
import { ref } from "vue";
import type { job } from "../api/type/job_type";
import type { GlintsResponse } from "../api/type/glints_type";
import { glintsService } from "../api/services/glints_service";

export const glintStore = defineStore("glints", () => {
  const jobs = ref<job[]>([]);
  const loading = ref(false);
  const loadingMore = ref(false);
  const error = ref<string | null>(null);
  const page = ref(1);
  const hasMore = ref(true);
  const currentParams = ref<{
    location_name?: string;
    work?: string;
  }>({});

  const fetchJobs = async (
    params: {
      page?: number;
      location_name?: string;
      work?: string;
    },
    isLoadMore = false
  ) => {
    if (isLoadMore) {
      loadingMore.value = true;
    } else {
      loading.value = true;
      // Reset state for new search
      jobs.value = [];
      page.value = 1;
      hasMore.value = true;
      error.value = null;
    }

    try {
      const requestParams = {
        ...params,
        page: isLoadMore ? page.value : params.page || 1,
      };

      const response: GlintsResponse = await glintsService.getGlintsJobs(
        requestParams
      );

      if (response.status === "success") {
        if (isLoadMore) {
          // Append new jobs to existing ones
          jobs.value = [...jobs.value, ...response.data.jobs];
        } else {
          // Replace jobs for new search
          jobs.value = response.data.jobs;
          currentParams.value = {
            location_name: params.location_name,
            work: params.work,
          };
        }
      } else {
        // API returned failed status - no more pages
        hasMore.value = false;
        if (!isLoadMore) {
          // If first page fails, it's an error
          throw new Error(response.message || "Failed to fetch jobs");
        }
      }
    } catch (err) {
      if (isLoadMore) {
        // If loading more fails, assume no more pages
        hasMore.value = false;
      } else {
        error.value = err instanceof Error ? err.message : "An error occurred";
        jobs.value = [];
      }
    } finally {
      loading.value = false;
      loadingMore.value = false;
    }
  };

  const loadMoreJobs = async () => {
    if (!hasMore.value || loadingMore.value) return;

    page.value += 1;
    await fetchJobs(
      {
        ...currentParams.value,
        page: page.value,
      },
      true
    );
  };

  const resetStore = () => {
    jobs.value = [];
    loading.value = false;
    loadingMore.value = false;
    error.value = null;
    page.value = 1;
    hasMore.value = true;
    currentParams.value = {};
  };

  return {
    jobs,
    loading,
    loadingMore,
    error,
    page,
    hasMore,
    fetchJobs,
    loadMoreJobs,
    resetStore,
  };
});

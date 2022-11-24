import { fetcher } from "../requests/fetcher";
import useSWR from "swr";

const useEmbed = (videoUrl?: string) => {
  const embedURL = `https://www.youtube.com/oembed?url=${videoUrl}&format=json`;
  const { data, error } = useSWR(videoUrl ? embedURL : undefined, fetcher);
  const isLoading = !data && !error;

  return {
    isLoading,
    thumbnailUrl: data?.thumbnail_url,
    html: data?.html,
  };
};

export default useEmbed;

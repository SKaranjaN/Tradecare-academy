"use client";

import * as z from "zod";
import axios from "axios";
import axiosRetry from "axios-retry";
import toast from "react-hot-toast";
import MuxPlayer from "@mux/mux-player-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { Chapter, MuxData } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface ChapterVideoFormProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const formschema = z.object({
  videoUrl: z.string().min(1),
});

const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  // Configure axios-retry
  axiosRetry(axios, {
    retries: 3, // Number of retries
    retryDelay: axiosRetry.exponentialDelay, // Exponential delay between retries
    shouldResetTimeout: true, // Reset the timeout between retries
  });

  const onSubmit = async (values: z.infer<typeof formschema>) => {
    try {
      await axios.patch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        values, {timeout:20000}
      );
      toast.success("Chapter Updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-base font-medium">Chapter video</p>
        <Button size="sm" onClick={toggleEdit}>
          {isEditing && (
            <>
              <p className="text-xs">Cancel</p>
            </>
          )}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-3 w-3 mr-2" />
              <p className="text-xs">Add a video</p>
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-3 w-3 mr-2" />
              <p className="text-xs">Edit video</p>
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div
            className="flex items-center justify-center
                h-60 rounded-md bg-slate-200"
          >
            <Video className="h-10 w-10 text-slate-700" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <MuxPlayer playbackId={initialData?.muxData?.playbackId || ""} />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Upload this chapter&apos;s video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Videos can take a few minutes to process. Refresh the page if video
          does not appear
        </div>
      )}
    </div>
  );
};

export default ChapterVideoForm;

"use client"

import toast from "react-hot-toast"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Trash } from "lucide-react"
import { useState } from "react"

import { ConfirmModal } from "@/components/modals/confirm-modal"
import { Button } from "@/components/ui/button"

interface ChapterActionsProps {
    disabled : boolean
    courseId : string
    chapterId : string
    isPublished : boolean
}

const ChapterActions = ({
    disabled,
    courseId,
    chapterId,
    isPublished
} : ChapterActionsProps ) => {

    const [isLoading , setIsLoading] = useState(false)
    
    const router = useRouter()

    const onClick = async () => {
        try {
            setIsLoading(true)

            if(isPublished) {
                await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/unpublish`)
                toast.success("Chapter unpublish")
            } else {
                await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/publish`)
                toast.success("Chapter publish")
            }

            router.refresh()
        } catch (error) {
            toast.error("Something went wrong")
            console.error("Something went wrong", error)
        } finally {
            setIsLoading(false)
        }
    }

    const onDelete = async () => {
        try {
           setIsLoading(true) 

           await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`)
           toast.success("Chapter deleted")
           router.refresh()
           router.push(`/teacher/courses/${courseId}`)
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

  return (

    <div className="flex items-center gap-x-2">
        <Button
            onClick={onClick}
            variant="outline"
            size="sm"
            disabled={disabled || isLoading}
        >
            {isPublished ? "Unpublish" : "Publish"}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
            <Button size="sm" disabled={isLoading}>
                <Trash className="h-4 w-4"/>
            </Button>
        </ConfirmModal>
    </div>
  )
}

export default ChapterActions
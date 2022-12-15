import type { Chapter, Course, Lesson } from "~/interfaces/base.interface";
import courseData from "./courseData";

export const useCourse = (): Course => {
  return {
    ...courseData,
    chapters: courseData.chapters.map((chapter: Chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson: Lesson) => ({
        ...lesson,
        path: `/course/chapter/${ chapter.slug }/lesson/${ lesson.slug }`,
      })),
    })),
  };
};
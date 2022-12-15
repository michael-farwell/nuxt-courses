<script
    lang="ts"
    setup>
const { chapters } = useCourse();
</script>

<template>
  <div class="p-12 bg-zinc-100 w-full h-full min-h-screen flex flex-col items-center">
    <div class="prose prose-zinc mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose prose-zinc mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col">
        <h3>Chapters</h3>
        <div
            class="space-y-1 mb-4 flex flex-col"
            v-for="chapter in chapters"
            :key="chapter.slug">
          <h4>{{ chapter.title }}</h4>
          <NuxtLink v-for="(lesson, index) in chapter.lessons"
          :key="lesson.slug"
          class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
          :to="lesson.path"
          :class="{
            'text-blue-500': lesson.path === $route.fullPath,
            'text-zinc-600': lesson.path !== $route.fullPath
          }">
            <span class="text-zinc-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose prose-zinc p-12 bg-white rounded-md w-[65ch]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
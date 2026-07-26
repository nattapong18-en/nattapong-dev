import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import {
  aboutSchema,
  learningSchema,
  projectSchema,
  researchSchema,
} from "./content/schema/families.ts";

const markdownOnly = "**/*.md";

const about = defineCollection({
  loader: glob({
    pattern: markdownOnly,
    base: "./content/public/about",
  }),
  schema: aboutSchema,
});

const projects = defineCollection({
  loader: glob({
    pattern: markdownOnly,
    base: "./content/public/projects",
  }),
  schema: projectSchema,
});

const research = defineCollection({
  loader: glob({
    pattern: markdownOnly,
    base: "./content/public/research",
  }),
  schema: researchSchema,
});

const learning = defineCollection({
  loader: glob({
    pattern: markdownOnly,
    base: "./content/public/learning",
  }),
  schema: learningSchema,
});

export const collections = {
  about,
  projects,
  research,
  learning,
};

import { z } from "zod";

const registryEntrySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  fileName: z.string(),
  inspirations: z.array(
    z.object({
      label: z.string(),
      url: z.string(),
    }),
  ),
  dependecies: z.array(
    z.object({
      label: z.string(),
      url: z.string(),
    }),
  ),
});

const registrySchema = z.record(registryEntrySchema);

type RegistryEntry = z.infer<typeof registryEntrySchema>;

type Registry = z.infer<typeof registrySchema>;

export { registryEntrySchema, registrySchema };
export type { Registry, RegistryEntry };

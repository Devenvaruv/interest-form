import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    EMAIL_ADDR: z.string().email(),
    EMAIL_PASS: z.string(),
    SHEETS_CLIENT_EMAIL: z.string(),
    EMAIL_PRIVATE_KEY: z.string(),
    OPENAI_API_KEY: z.string(),
    PINECONE_API_KEY: z.string(),
    PINECONE_INDEX_NAME: z.string(),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    //NEXT_PUBLIC_SPREADSHEET_ID: z.string()
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    EMAIL_ADDR: process.env.EMAIL_ADDR,
    EMAIL_PASS: process.env.EMAIL_PASS,
    SHEETS_CLIENT_EMAIL: process.env.SHEETS_CLIENT_EMAIL,
    EMAIL_PRIVATE_KEY: process.env.EMAIL_PRIVATE_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    PINECONE_API_KEY: process.env.PINECONE_API_KEY,
    PINECONE_INDEX_NAME: process.env.PINECONE_INDEX_NAME,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});

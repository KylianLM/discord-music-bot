export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      BOT_APPLICATION_ID: string;
      DOWNLOAD_DIR: string;
      REDIS_URL: string;
    }
  }
}

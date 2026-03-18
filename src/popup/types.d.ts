declare global {
  interface Window {
    AppEventBus: EventBus;
  }
}

export type AppEventPayload = unknown;
// export type AppEvent = {
//   name: string;
//   payload: unknown;
// };

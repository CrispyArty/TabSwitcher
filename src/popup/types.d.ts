import EventBus from './eventBus';

declare global {
  interface Window {
    AppEventBus: EventBus;
    AppBackgroundPort: chrome.runtime.Port;
  }
}

export type AppEventPayload = unknown;

export type EventMessage = {
  name: string;
  [key: string]: unknown;
};

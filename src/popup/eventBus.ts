import { AppEventPayload } from './types';

type Callback = (payload: AppEventPayload) => void;

export default class EventBus {
  #eventsMap: Map<string, Array<AppEventPayload>> = new Map();
  #listeners: Map<string, Array<Callback>> = new Map();

  emit(name: string, payload?: AppEventPayload): void {
    this.#addEvent(name, payload);
    this.#runListeners(name);
  }

  on(name: string, callback: Callback): void {
    this.#addListener(name, callback);
    this.#runListeners(name);
  }

  off(name: string, callback: Callback): void {
    if (!this.#listeners.has(name)) {
      return;
    }

    this.#listeners.set(
      name,
      this.#listeners.get(name).filter((cb) => cb !== callback),
    );
  }

  #addEvent(name: string, payload: AppEventPayload) {
    if (!this.#eventsMap.has(name)) {
      this.#eventsMap.set(name, []);
    }
    this.#eventsMap.get(name).push(payload);
  }

  #runListeners(name: string) {
    const listeners = this.#listeners.get(name);

    if (!listeners) {
      return;
    }

    const events = this.#eventsMap.get(name);

    if (!events) {
      return;
    }

    while (events.length > 0) {
      const payload = events.shift();
      listeners.forEach((callback) => {
        callback(payload);
      });
    }
  }

  #addListener(name: string, callback: Callback) {
    if (!this.#listeners.has(name)) {
      this.#listeners.set(name, []);
    }
    this.#listeners.get(name).push(callback);
  }
}

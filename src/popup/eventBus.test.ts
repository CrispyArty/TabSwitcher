import { test, expect, jest } from '@jest/globals';
import EventBus from './eventBus';

test('fire an event with registered listener', () => {
  const listener = jest.fn();

  const bus = new EventBus();

  bus.on('test-event', listener);
  bus.emit('test-event');
  expect(listener).toHaveBeenCalled();
});

test('fire an event with registered multiple listener', () => {
  const listener = jest.fn();
  const listener2 = jest.fn();

  const bus = new EventBus();

  bus.on('test-event', listener);
  bus.on('test-event', listener);
  bus.on('test-event', listener2);
  bus.emit('test-event');
  expect(listener).toHaveBeenCalledTimes(2);
  expect(listener2).toHaveBeenCalledTimes(1);
});

test('fire many event with registered listener', () => {
  const listener = jest.fn();

  const bus = new EventBus();

  bus.on('test-event', listener);
  bus.emit('test-event');
  bus.emit('test-event');
  bus.emit('test-event');
  expect(listener).toHaveBeenCalledTimes(3);
});

test('fire an event with registered unrelated listener', () => {
  const listener = jest.fn();

  const bus = new EventBus();

  bus.on('test-event2', listener);
  bus.emit('test-event');
  expect(listener).toHaveBeenCalledTimes(0);
});

test('fire some events and AFTER register a listener', () => {
  const listener = jest.fn();

  const bus = new EventBus();
  const payload1 = { tab: 229 };
  const payload2 = { tab: 1337 };

  bus.emit('test-event', payload1);
  bus.emit('test-event', payload2);
  bus.emit('test-event2');

  bus.on('test-event', listener);
  expect(listener).toHaveBeenNthCalledWith(1, payload1);
  expect(listener).toHaveBeenNthCalledWith(2, payload2);
});

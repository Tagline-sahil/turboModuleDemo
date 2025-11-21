import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setItem(value: string, key: string): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
  clear(): void;
  add(a: number, b: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalStorage');

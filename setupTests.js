import { vi } from 'vitest';
import '@testing-library/jest-dom';


window.IntersectionObserver  = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
vi.useFakeTimers();

global.IntersectionObserver = class IntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }
  
    observe() {
      this.callback([{ isIntersecting: true }]);
    }
  
    disconnect() {}
    unobserve() {}
  };
  
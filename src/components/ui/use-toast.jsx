let toastQueue = [];

export const toast = (message, type = "info", duration = 3000) => {
  const id = Math.random().toString(36).substr(2, 9);
  toastQueue.push({ id, message, type });

  setTimeout(() => {
    toastQueue = toastQueue.filter((t) => t.id !== id);
  }, duration);
};

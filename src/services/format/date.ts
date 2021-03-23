export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

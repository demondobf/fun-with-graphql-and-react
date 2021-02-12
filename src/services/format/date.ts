export const formatDateTime = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  };

  return new Date(date).toLocaleDateString(undefined, options);
};

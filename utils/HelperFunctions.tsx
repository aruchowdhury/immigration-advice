export const formatDate: any = (inputDateStr: any) => {
  const date = new Date(inputDateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

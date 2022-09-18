export const createDate = () => {
  // TODO: date type지정
  const getStringDate = (date: any) => date.toISOString().slice(0, 10);
  return getStringDate(new Date());
};

export const randomId = Math.floor(Math.random() * 200);

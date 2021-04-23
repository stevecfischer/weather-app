const getDate = () => {
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const month = currentDate.getMonth();
  const dayOfWeek = currentDate.getDay();

  console.log(
    dayOfMonth,
    month,
    dayOfWeek,
    "ddddd"
  )

  return {
    dayOfMonth,
    month,
    dayOfWeek,
  }
}

export default getDate;

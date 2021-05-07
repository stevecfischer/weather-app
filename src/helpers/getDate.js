const getDate = (unix) => {
  let currentDate;
  if (unix) {
    currentDate = new Date(unix * 1000);
  } else {
    currentDate = new Date();
  }

  // const dayOfMonth = currentDate.getDate();
  // const month = currentDate.getMonth();
  // const dayOfWeek = currentDate.getDay();
  //
  // console.log(
  //   dayOfMonth,
  //   month,
  //   dayOfWeek,
  // )

  return currentDate.toLocaleDateString();
};

export default getDate;

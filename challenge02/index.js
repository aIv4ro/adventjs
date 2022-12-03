const countHours = (year, holidays) => {
  return holidays.reduce((acc, holiday) => {
    const date = new Date(`${year}/${holiday}`);
    if(date.getDay() % 6 === 0) return acc;
    return acc + 2;
  }, 0);
}

const year = 2024;
const holidays = ['01/06', '02/29', '12/25', '12/31'];
console.log(countHours(year, holidays));
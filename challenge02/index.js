function countHours(year, holidays) {
  return holidays.reduce((acc, holiday) => {
    const date = new Date(`${year}/${holiday}`);
    const dayOfWeek = date.getDay();
    if(dayOfWeek === 0 || dayOfWeek === 6) return acc;
    return acc + 1;
  }, 0) * 2;
}

const year = 2024;
const holidays = ['01/06', '02/29', '12/25', '12/31'];
console.log(countHours(year, holidays));
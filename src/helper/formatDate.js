function formatDate(date, format) {
    const dat = format
    return dat.replace("mm", date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1): date.getMonth() + 1)
    .replace("yy", date.getFullYear())
    .replace("dd",date.getDay() + 1 < 10 ? "0" + (date.getDay() + 1): date.getDay() + 1)
}
export default formatDate

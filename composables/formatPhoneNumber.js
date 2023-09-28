export default function (phone) {
  const regex = /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/;

  const formattedNumber = num.replace(regex, "$1 $2 $3 $4 $5");
    console.log(formattedNumber);
  return formattedNumber;
}

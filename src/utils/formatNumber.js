function formatNumber(number, decimalPlaces = 0) {
  return new Intl.NumberFormat("en-IN").format(number);
}

export default formatNumber;

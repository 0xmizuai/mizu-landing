export function formatNumber(
  num: string | number | bigint | undefined | null,
  options: {
    decimals?: number;
    fixedDecimals?: boolean;
    withSplit?: boolean;
    toReadable?: boolean;
    roundMode?: "round" | "floor" | "ceil";
    prefix?: string;
    hideDecimalsForZero?: boolean;
  } = {}
) {
  if (num === undefined || num === null || num === "") {
    return "--";
  }
  if (isNaN(Number(num))) {
    return "--";
  }

  let decimals = options.decimals === undefined ? 6 : options.decimals;
  const withSplit = options.withSplit === undefined ? true : options.withSplit;
  const fixedDecimals =
    options.fixedDecimals === undefined ? false : options.fixedDecimals;
  const toReadable =
    options.toReadable === undefined ? false : options.toReadable;
  const roundMode = options.roundMode || "floor";
  const hideDecimalsForZero = !!options.hideDecimalsForZero;
  let suffix = "";

  if (hideDecimalsForZero && Number(num) === 0) {
    return "0";
  }

  let newNum = "0";
  if (toReadable && Number(num) >= 1000000000) {
    newNum = Number(num) / 1000000000 + "";
    suffix = "B";
    decimals = 3;
  } else if (toReadable && Number(num) >= 1000000) {
    newNum = Number(num) / 1000000 + "";
    suffix = "M";
    decimals = 3;
  } else if (toReadable && Number(num) >= 10000) {
    newNum = Number(num) / 1000 + "";
    suffix = "K";
    decimals = 3;
  } else {
    newNum = num + "";
  }

  // console.log({ newNum });

  const roundMethod =
    roundMode === "floor"
      ? Math.floor
      : roundMode === "ceil"
      ? Math.ceil
      : Math.round;

  newNum =
    roundMethod(Number(newNum) * Math.pow(10, decimals)) /
      Math.pow(10, decimals) +
    "";

  // console.log({ newNum });

  if (fixedDecimals) {
    newNum = Number(newNum).toFixed(decimals);
  }

  if (Number(newNum) === 0 && Number(num) > 0) {
    newNum = `<${options.prefix || ""}${1.0 / Math.pow(10, decimals)}`;
  } else {
    newNum = (options.prefix || "") + newNum;
  }

  // console.log({ newNum });

  if (withSplit) {
    var parts = newNum.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    newNum = parts.join(".") + suffix;
  } else {
    newNum = newNum + suffix;
  }

  return newNum;
}

export function getLargeNumberAndSuffix(num: number) {
  let newNum = "0";
  let suffix = "";
  let decimals = 1;
  if (Number(num) >= 1000000000) {
    newNum = Number(num) / 1000000000 + "";
    suffix = "B";
    decimals = 1;
  } else if (Number(num) >= 1000000) {
    newNum = Number(num) / 1000000 + "";
    suffix = "M";
    decimals = 1;
  } else if (Number(num) >= 1000) {
    newNum = Number(num) / 1000 + "";
    suffix = "K";
    decimals = 1;
  } else {
    newNum = num + "";
  }

  newNum =
    Math.round(Number(newNum) * Math.pow(10, decimals)) /
      Math.pow(10, decimals) +
    "";

  return [newNum, suffix];
}

export function getLargeSizeAndSuffix(bytes: number) {
  let newNum = "0";
  let suffix = "";
  let decimals = 1;
  const TB = 1024 * 1024 * 1024 * 1024;
  const GB = 1024 * 1024 * 1024;
  const MB = 1024 * 1024;
  const KB = 1024 * 1024;
  if (Number(bytes) >= TB) {
    newNum = Number(bytes) / TB + "";
    suffix = "TB";
    decimals = 1;
  } else if (Number(bytes) >= GB) {
    newNum = Number(bytes) / GB + "";
    suffix = "GB";
    decimals = 1;
  } else if (Number(bytes) >= MB) {
    newNum = Number(bytes) / MB + "";
    suffix = "MB";
    decimals = 1;
  } else if (Number(bytes) >= KB) {
    newNum = Number(bytes) / KB + "";
    suffix = "KB";
    decimals = 1;
  } else {
    newNum = bytes + "";
  }

  newNum =
    Math.round(Number(newNum) * Math.pow(10, decimals)) /
      Math.pow(10, decimals) +
    "";

  return [newNum, suffix];
}

export function formatPointNumber(point: number) {
  // return Number(point.toFixed(1));
  return Math.round(point * 10) / 10;
}

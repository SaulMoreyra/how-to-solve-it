function funnyString(s) {
  const stn = s.split("").map((c) => c.charCodeAt())
  for (let i = 1; i < stn.length; i++) {
    const diffL = Math.abs(stn[i - 1] - stn[i]);
    const diffR = Math.abs(stn[stn.length - i - 1] - stn[stn.length - i]);
    if (diffL !== diffR) return "Not Funny";
  }
  return "Funny";
}

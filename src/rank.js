function voyageRisk (voyage) {
  let result = 1;
  if (voyage.length > 4) {
    result += 2;
    if (voyage.length > 8) {
      result += voyage.length - 8;
    }
  }
  result += isZoneInChinaOrEast_Indies(voyage.zone)?4:0;
  return Math.max(result, 0);
}

function isZoneInChinaOrEast_Indies(zone) {
    return zone === 'china' || zone === 'east-indies';
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = history.length < 5 ? 5 : 1;
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
    result += 1;
  }
  if (voyage.zone === 'china' && hasChina(history)) {
    result += history.length > 10 ? 4 : 3;
    result += voyage.length > 12 && voyage.length <= 18 ? 1 : 0;
  }
  else {
    result += history.length > 8 ? 1 : 0;
    result += voyage.length > 14 ? -1 : 0
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  voyageRisk,
  voyageProfitFactor,
  captainHistoryRisk,
  rating
};

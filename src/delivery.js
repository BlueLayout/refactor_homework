function isDeliveryStateInMAorCT(deliveryState) {
  return ['MA','CT'].includes(deliveryState);
}

function isDeliveryStateInNYorNH(deliveryState) {
    return ['NY', 'NH'].includes(deliveryState);
}

function isDeliveryStateInMAorCTorNY(deliveryState) {
    return ['MA', 'CT','NY'].includes(deliveryState);
}

function isDeliveryStateInMEorNH(anOrder) {
    return ['ME', 'NH'].includes(anOrder.deliveryState);
}

function getDeliveryTime(deliveryState) {
  if (isDeliveryStateInMAorCT(deliveryState)) {
    return 1;
  }
  else if (isDeliveryStateInNYorNH(deliveryState)) {
    return 2;
  }
  else {
    return 3;
  }
}

function getDeliveryTimeNonRush(deliveryState) {
    if (isDeliveryStateInMAorCTorNY(deliveryState)) {
        return  2;
    }
    else if (isDeliveryStateInMEorNH(deliveryState)) {
        return  3;
    }
    else {
        return  4;
    }
}

function deliveryDate (anOrder, isRush) {
  let deliveryTime;
  if (isRush) {
    deliveryTime = getDeliveryTime(anOrder.deliveryState);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    deliveryTime = getDeliveryTimeNonRush(anOrder.deliveryState);
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};

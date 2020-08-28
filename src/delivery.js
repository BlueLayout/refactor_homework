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

function deliveryDate (anOrder, isRush) {
  let deliveryTime;
  if (isRush) {
    if (isDeliveryStateInMAorCT(anOrder.deliveryState)) {
      deliveryTime = 1;
    }
    else if (isDeliveryStateInNYorNH(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    if (isDeliveryStateInMAorCTorNY(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if (isDeliveryStateInMEorNH(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};

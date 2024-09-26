// Function to calculate discount and bonus points
function calculateDiscountAndPoints(totalAmount) {
  let discountPercentage, bonusPoints;

  if (totalAmount > 100) {
    discountPercentage = 20;
    bonusPoints = 10;
  } else if (totalAmount >= 50) {
    discountPercentage = 10;
    bonusPoints = 5;
  } else {
    discountPercentage = 0;
    bonusPoints = 0;
  }

  const discountAmount = (discountPercentage / 100) * totalAmount;
  const finalAmount = totalAmount - discountAmount;

  return { discountPercentage, finalAmount, bonusPoints };
}

const totals = [30, 75, 150];

totalAmount: 30.0;
discountPercentage: 0;
finalAmountAfterDiscount: 30.0;
bonusPointsEarned: 0;

totalsAmount: 75.0;
DiscountPercentage: 10;
FinalAmountAfterDiscount: 67.5;
bonusPointsEarned: 5;

totalAmount: 150.0;
discountPercentage: 20;
finalAmountAfterDiscount: 120.0;
bonusPointsEarned: 10;

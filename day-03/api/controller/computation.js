"use strict";

const multiplyTwoNumbers = (req, res) => {
  const firstNum = parseFloat(req.params.firstNum);
  const secondNum = parseFloat(req.query.secondNum);

  res.status(200).json({
    firstNum,
    secondNum,
    result: firstNum * secondNum,
  });
};

module.exports = {
  multiplyTwoNumbers,
};

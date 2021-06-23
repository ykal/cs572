"use strict";

const multiplyTwoNumbers = (req, res) => {
  const firstNum = parseInt(req.params.firstNum);
  const secondNum = parseInt(req.query.secondNum);

  res.status(200).json({
    firstNum,
    secondNum,
    result: firstNum * secondNum,
  });
};

module.exports = {
  multiplyTwoNumbers,
};

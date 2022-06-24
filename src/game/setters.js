function toNineDigits(value) {
  value = "" + value;
  let length = value.length;
  for (let i = 0; i < 9 - length; i++) {
    value = "0" + value;
  }
  return value;
}

var setScoreHook = () => {};
function setScoreSetter(_funciton) {
  setScoreHook = _funciton;
}
let setScore = (value) => {
  setScoreHook(toNineDigits(value));
};

var setLevelHook = () => {};
function setLevelSetter(_funciton) {
  setLevelHook = _funciton;
}
let setLevel = (value) => {
  setLevelHook(toNineDigits(value));
};

var setLinesHook = () => {};
function setLinesSetter(_funciton) {
  setLinesHook = _funciton;
}
let setLines = (value) => {
  setLinesHook(toNineDigits(value));
};

var setNextHook = () => {};
function setNextSetter(_funciton) {
  setNextHook = _funciton;
}
let setNext = (value) => {
  setNextHook(value);
};

var setHoldHook = () => {};
function setHoldSetter(_funciton) {
  setHoldHook = _funciton;
}
let setHold = (value) => {
  setHoldHook(value);
};

var setBoardHook = () => {};
function setBoardSetter(_funciton) {
  setBoardHook = _funciton;
}
let setBoard = (value) => {
  setBoardHook(value);
};

module.exports = {
  setScoreSetter,
  setLevelSetter,
  setLinesSetter,
	setNextSetter,
	setHoldSetter,
	setBoardSetter,
	setHold,
	setBoard,
	setNext,
  setScore,
  setLines,
  setLevel,
};

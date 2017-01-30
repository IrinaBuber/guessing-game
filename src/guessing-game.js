class GuessingGame {
    constructor() {
    	this._min = this._max = this._lastGuess = 0;
    }

    setRange(min, max) {
    	this._min = min;
    	this._max = max;
    }

    guess() {
    	this._lastGuess = Math.ceil((this._max + this._min) / 2);
    	return this._lastGuess;
    }

    lower() {
    	this._max = this._lastGuess;
    	this._lastGuess = Math.ceil((this._max + this._min) / 2);
    	return this._lastGuess;
    }

    greater() {
    	this._min = this._lastGuess;
    	this._lastGuess = Math.ceil((this._max + this._min) / 2);
    	return this._lastGuess;
    }
}

module.exports = GuessingGame;

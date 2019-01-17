export default class Debouncer {

    constructor(action, debounceTime = 300, precall, callback) {

        if (typeof action === "function") {
            this._timer = null;
            this._action = action;
            this._debounceTime = debounceTime;
            this._precall = precall;
            this._callback = callback;
        }
        else {
            throw "Only functions are possible to debounce";
        }
    }

    run() {
        if (this._timer != null) {
            clearTimeout(this._timer);
        }

        if (this._timer == null && typeof this._precall === "function") {
            this._precall();
        }

        let run = () => {
            this._action();
            this._timer = null;
            if (typeof this._callback === "function") {
                this._callback();
            }
        };

        let nowDate = new Date();
        if (this._lastRun == null || this._lastRun.getTime() + this._debounceTime < nowDate.getTime()) {
            this._timer = setTimeout(run, 0);
        }
        else {
            this._timer = setTimeout(run, this._debounceTime);
        }
        this._lastRun = nowDate;

    }

}
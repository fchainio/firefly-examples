var FireFlyWallet = /** @class */ (function () {
    function FireFlyWallet(appname, appid) {
        this._intervalTime = 300;
        this._count = 50;
        this._appname = appname;
        this._appid = appid;
    }
    /**
     * 监听是否存在
     */
    FireFlyWallet.prototype.ready = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._interval = setInterval(function () {
                if (window.FFW) {
                    _this.clear();
                    _this.register();
                    resolve(window.FFW);
                }
                _this._count--;
                if (_this._count < 0) {
                    _this.clear();
                    reject('not firefly wallet environment');
                }
            }, _this._intervalTime);
        });
    };
    
    FireFlyWallet.prototype.clear = function () {
        if (this._interval != undefined) {
            clearInterval(this._interval);
        }
        this._interval = undefined;
    };
    
    FireFlyWallet.prototype.register = function () {
        if (window.FFW && window.FFW.register
            && this._appname != undefined && this._appid != undefined) {
            window.FFW.register(this._appname, this._appid);
        }
    };
    
    FireFlyWallet.prototype.getVersion = function () {
        if (window.FFW) {
            return Promise.resolve(window.FFW.version);
        }
        return Promise.reject('not firefly wallet environment');
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "version", {
        get: function () {
            return window.FFW ? window.FFW.version : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getPlatform = function () {
        if (window.FFW) {
            return Promise.resolve(window.FFW.platform);
        }
        return Promise.reject('not firefly wallet environment');
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "platform", {
        get: function () {
            return window.FFW ? window.FFW.platform : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getAccountId = function () {
        if (window.FFW) {
            return Promise.resolve(window.FFW.address);
        }
        return Promise.reject('not firefly wallet environment');
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "accountid", {
        get: function () {
            return window.FFW ? window.FFW.address : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getUuid = function () {
        if (window.FFW) {
            return Promise.resolve(window.FFW.uuid);
        }
        return Promise.reject('not firefly wallet environment');
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "uuid", {
        get: function () {
            return window.FFW ? window.FFW.uuid : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getLocale = function () {
        if (window.FFW) {
            return Promise.resolve(window.FFW.locale);
        }
        return Promise.reject('not firefly wallet environment');
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "locale", {
        get: function () {
            return window.FFW ? window.FFW.locale : undefined;
        },
        enumerable: true,
        configurable: true
    });
    FireFlyWallet.prototype.getContacts = function () {
        if (window.FFW) {
            return Promise.resolve(window.FFW.contacts);
        }
        return Promise.reject('not firefly wallet environment');
    };
    
    Object.defineProperty(FireFlyWallet.prototype, "contacts", {
        get: function () {
            return window.FFW ? window.FFW.contacts : undefined;
        },
        enumerable: true,
        configurable: true
    });
    
    FireFlyWallet.prototype.getBalances = function () {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.balances(function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.sign = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.sign(JSON.stringify(data), function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.pay = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.pay(data, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.pathPayment = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.pathPayment(data, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.trust = function (code, issuer) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.trust(code, issuer, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.signXDR = function (data, message) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.signXDR(data, message, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.scan = function () {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.scan(function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    FireFlyWallet.prototype.share = function (data) {
        if (window.FFW) {
            return new Promise(function (resolve, reject) {
                window.FFW.share(data, function (response) {
                    if (response.code === 'success') {
                        resolve(response.data);
                    }
                    else {
                        reject(response.message);
                    }
                });
            });
        }
        else {
            return Promise.reject('not firefly wallet environment');
        }
    };
    
    return FireFlyWallet;
}());

export { FireFlyWallet };

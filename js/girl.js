var disConnectTime = 10000;
var attackedLostHealth = 5;

function randomUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function Girl(id, socket) {
    var self = this;
    self.id = id;
    self.connectid;
    self.boyId;
    self.socket = socket;
    self.health = 100;
    self.boyHealth = 100;
    self.boySize;
    self.lastConnectedTime;
    self.socket.emit('myid', {
        'myid': self.id
    });
    // 监听Boy发来的消息
    self.socket.on("yourensaole2", function(data) {
        // 不是和我链接的请求 不处理
        if (data.fxzid !== self.id) {
            return;
        }
        // 不存在connectid时，只有type === 'connect'的请求有效
        if (!self.connectid && data.type !== 'connect') {
            return;
        }
        // 不是和我第一次链接的请求 不处理
        if (self.connectid && self.connectid !== data.connectid) {
            return;
        }
        // 有boy加入,且没有连接过
        if (data.type === 'connect' && !self.lastConnectedTime) {
            self.boyId = data.fid;
            self.connectid = data.connectid;
            self.boySize = data.msg;
            self.lastConnectedTime = (new Date()).getTime();
            self.socket.emit('pour', {
                'fid': self.boyId,
                'connectid': self.connectid,
                'type': 'connect',
                'msg': {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            });
            self._onconnected();
        }
        // 刷新上一次boy链接的时间
        if (data.type === 'connectting') {
            self.lastConnectedTime = (new Date()).getTime();
        }

        if (data.type === 'pk.attack') {
            self._lostHealth(attackedLostHealth);
        }
        if (data.type === 'pk.lostHealth') {
            self._updateGirlHealth(data.msg);
        }
        if (data.type === 'scene.finish') {
            var sceneName = data.msg;
            self._emit('boy.' + sceneName + '.finish');
        }
    });


}
Girl.prototype = Object.assign({}, EventPrototype);

Girl.prototype._onconnected = function() {
    var self = this;
    // self._ondisconnected();
    // 不停的发送消息给Boy，告诉他我在呢
    self.connecttingTimer = setInterval(function() {
        // 没有Boy链接不处理
        if (!self.boyId) {
            return;
        }
        self.socket.emit('pour', {
            'fid': self.boyId,
            'connectid': self.connectid,
            'type': 'connectting',
            'msg': ''
        });
    }, 1000);
    // 验证boy的链接是否超时
    self.ckeckBoyConnectedTimer = setInterval(function() {
        // 没有Boy链接不验证
        if (!self.boyId) {
            return;
        }
        var currentTime = (new Date()).getTime();
        if (currentTime - self.lastConnectedTime > disConnectTime) {
            self._ondisconnected();
        }
    }, 1000);
}

// Boy 断开连接
Girl.prototype._ondisconnected = function() {
    var self = this;
    self.lastConnectedTime = undefined;
    clearInterval(self.connecttingTimer);
    clearInterval(self.ckeckBoyConnectedTimer);
    clearInterval(self.autoLostHealthTimer);
    self._emit("boy.disconnect");
}

Girl.prototype.attack = function() {
    var self = this;
    self.socket.emit('pour', {
        'fid': this.boyId,
        'connectid': self.connectid,
        'type': 'pk.attack',
        'msg': ''
    });
}
Girl.prototype.startPk = function() {
    var self = this;
    self.autoLostHealthTimer = setInterval(function() {
        self._lostHealth(1);
    }, 300)
}
Girl.prototype._updateGirlHealth = function(v) {
    var self = this;
    self.boyHealth = v;
    if (self.boyHealth <= 0) {
        self._emit('boy.down')
    }
    self._checkKO();
}
Girl.prototype._lostHealth = function(v) {
    var self = this;
    if (self.health <= 0) {
        return;
    }
    self.health -= v;
    if (self.health < 0) {
        self.health = 0;
        clearInterval(self.autoLostHealthTimer);
    }
    self._emit("lostHealth", self.health);
    self.socket.emit('pour', {
        'fid': this.boyId,
        'connectid': self.connectid,
        'type': 'pk.lostHealth',
        'msg': self.health
    });
    self._checkKO();
}
Girl.prototype._checkKO = function() {
    var self = this;
    if (self.health <= 0 && self.boyHealth <= 0) {
        self._emit("KO", self.health);
    }
}
Girl.prototype.finishScene = function(scene) {
    var self = this;
    self.socket.emit('pour', {
        'fid': this.boyId,
        'connectid': self.connectid,
        'type': 'scene.finish',
        'msg': scene.name
    });
}
Girl.prototype.finishGame = function() {
    var self = this;
    clearInterval(self.connecttingTimer);
    clearInterval(self.ckeckBoyConnectedTimer);
    clearInterval(self.autoLostHealthTimer);
    socket.close();
}
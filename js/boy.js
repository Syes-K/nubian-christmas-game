var disConnectTime = 10000;
var attackedLostHealth = 5;

function Boy(id, girlId, socket) {
    var self = this;
    self.id = id;
    self.connectid = randomUuid();
    self.girlId = girlId;
    self.socket = socket;
    self.health = 100;
    self.girlHealth = 100;
    self.girlSize;
    self.lastConnectedTime;
    // 注册 id
    self.socket.emit('myid', {
        'myid': self.id
    });
    // 监听Girl 发来的消息
    self.socket.on("startget2", function(data) {
        // 不是和我第一次链接的请求 不处理
        if (self.connectid !== data.connectid) {
            return;
        }
        if (data.type === 'connect' && !self.lastConnectedTime) {
            self.lastConnectedTime = (new Date()).getTime();
            self.girlSize = data.msg;
            self._onconnected();
        }
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
            self._emit('girl.' + sceneName + '.finish');
        }
    });
}

Boy.prototype = Object.assign({}, EventPrototype);

Boy.prototype.connect = function() {
    var self = this;
    // 和girl建立链接
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
        'type': 'connect',
        'connectid': self.connectid,
        'msg': {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    });
}

Boy.prototype._onconnected = function() {
    var self = this;
    // self._ondisconnected()
    // 不停的发送消息给Girl，告诉她我在呢
    self.connecttingTimer = setInterval(function() {
        self.socket.emit('saole', {
            'fxzid': self.girlId,
            'fid': self.id,
            'connectid': self.connectid,
            'type': 'connectting',
            'msg': ''
        });
    }, 1000);
    // 验证Girl的链接是否超时
    self.ckeckGirlConnectedTimer = setInterval(function() {
        var currentTime = (new Date()).getTime();
        if (currentTime - self.lastConnectedTime > disConnectTime) {
            self._ondisconnected();
        }
    }, 1000);
}
Boy.prototype._ondisconnected = function() {
    var self = this;
    self.lastConnectedTime = undefined;
    clearInterval(self.connecttingTimer);
    clearInterval(self.ckeckGirlConnectedTimer);
    clearInterval(self.autoLostHealthTimer);
    self._emit("girl.disconnect");
}
Boy.prototype.attack = function() {
    var self = this;
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
        'connectid': self.connectid,
        'type': 'pk.attack',
        'msg': ''
    });
}
Boy.prototype.startPk = function() {
    var self = this;
    self.autoLostHealthTimer = setInterval(function() {
        self._lostHealth(1);
    }, 300);
}
Boy.prototype._updateGirlHealth = function(v) {
    var self = this;
    self.girlHealth = v;
    if (self.girlHealth <= 0) {
        self._emit('girl.down')
    }
    self._checkKO();
}
Boy.prototype._lostHealth = function(v) {
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
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
        'connectid': self.connectid,
        'type': 'pk.lostHealth',
        'msg': self.health
    });
    self._checkKO();
}
Boy.prototype._checkKO = function() {
    var self = this;
    if (self.health <= 0 && self.girlHealth <= 0) {
        self._emit("KO", self.health);
    }
}
Boy.prototype.finishScene = function(scene) {
    var self = this;
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
        'connectid': self.connectid,
        'type': 'scene.finish',
        'msg': scene.name
    });
}
Boy.prototype.finishGame = function() {
    var self = this;
    clearInterval(self.connecttingTimer);
    clearInterval(self.ckeckGirlConnectedTimer);
    clearInterval(self.autoLostHealthTimer);
    socket.close();
}
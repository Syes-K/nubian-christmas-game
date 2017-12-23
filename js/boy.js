var disConnectTime = 5000;
var attackedLostHealth = 5;

function Boy(id, girlId, socket) {
    var self = this;
    self.id = id;
    self.girlId = girlId;
    self.socket = socket;
    self.health = 100;
    self.girlHealth = 100;
    self.lastConnectedTime;
    // 注册 id
    self.socket.emit('myid', {
        'myid': self.id
    });
    // 监听Girl 发来的消息
    self.socket.on("startget2", function(data) {
        if (data.type === 'connectting') {
            if (!self.lastConnectedTime) { //没有连接的情况，开启连接
                self._onconnected();
            }
            self.lastConnectedTime = (new Date()).getTime();
        }
        if (data.type === 'pk.attack') {
            self._lostHealth(attackedLostHealth);
        }
        if (data.type === 'pk.lostHealth') {
            self._updateGirlHealth(data.msg);
        }
        if (data.type === 'scene.finish') {
            var scene = data.msg;
            self._emit('girl.' + scene.name + '.finish');
        }
        console.log(data)
    });
}

Boy.prototype = Object.assign({}, EventPrototype);

Boy.prototype.connect = function() {
    var self = this;
    // 和girl建立链接
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
        'type': 'login',
        'message': ''
    });
}

Boy.prototype._onconnected = function() {
    var self = this;
    self._ondisconnected()
    // 不停的发送消息给Girl，告诉她我在呢
    self.connecttingTimer = setInterval(function() {
        self.socket.emit('saole', {
            'fxzid': self.girlId,
            'fid': self.id,
            'type': 'connectting',
            'msg': ''
        });
    }, 4000);
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
    console.log("disconnect");
}
Boy.prototype.attack = function() {
    var self = this;
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
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
        'type': 'pk.lostHealth',
        'msg': self.health
    });
    self._checkKO();
}
Boy.prototype._checkKO = function() {
    var self = this;
    if (self.health <= 0 && self.girlHealth <= 0) {
        console.log("KO")
        self._emit("KO", self.health);
    }
}
Boy.prototype.finishScene = function(scene) {
    self.socket.emit('saole', {
        'fxzid': self.girlId,
        'fid': self.id,
        'type': 'scene.finish',
        'msg': scene.name
    });
}
var EventPrototype = {
    on: function(names, callback) {
        if (!this._events) {
            this._events = [];
        }
        var nameList = names.split(/[\,\s\;]/);
        var index = nameList.length;
        while (index) {
            index--;
            var name = nameList[index];
            if (!this._events[name]) {
                this._events[name] = [];
            }
            this._events[name].push(callback);
        }
    },
    off: function(name, callback) {
        if (!this._events) {
            this._events = [];
        }
        if (!name) {
            this._events = {};
            return;
        }
        var event = this._events[name];
        if (!event) {
            return;
        }
        if (!callback) {
            delete this._events[name];
        } else {
            var length = event.length;
            while (length > 0) {
                length--;
                if (event[length] === callback) {
                    event.splice(length, 1);
                }
            }
        }
    },
    _emit: function(name) {
        if (!this._events) {
            this._events = [];
        }
        // var event = this._events[name];
        var AllEvents = [];
        var names = name.split(".");
        while (names.length) {
            var partName = names.join(".");
            var events = this._events[partName];
            if (events && events.length) {
                AllEvents = AllEvents.concat(events);
            }
            names.pop();
        }
        var args = Array.prototype.slice.call(arguments, 1);
        if (AllEvents.length) {
            var length = AllEvents.length;
            var i = 0;
            while (i < length) {
                AllEvents[i].apply(this, args);
                i++;
            }
        }
    }
}

function Scene(list, character) {
    var self = this;
    self.scenes = list;
    self.character = character;
    self.scenes.forEach(function(scene, idx) {
        // 如果该场景是在上一个完成后进入
        if (scene.enterTrigger) {
            if (scene.enterTrigger.type === 'last.finish') {
                var lastScene = self.scenes[idx - 1];
                self.on('scene.' + lastScene.name + '.finish', function() {
                    self.enter(scene);
                })
            }
            // 基于事件进入(一般是对方完成某个场景)
            else if (scene.enterTrigger.type === 'event') {
                self.character.on(scene.enterTrigger.eventName, function() {
                    self.enter(scene);
                })
            }
        }
        // 手动进入场景，不需要在这里处理
        //else (){}
    })
    self.character = character;
}

Scene.prototype = Object.assign({}, EventPrototype);


Scene.prototype.enter = function(scene) {
    var self = this;
    self.currentScene = scene;

    var pageId = scene.name.split('.')[0];
    var stepName = scene.name.split('.')[1];

    //将所有场景隐藏
    document.querySelectorAll(".page").forEach(function(el) {
        el.classList.add('none');
    });
    var pageEl = document.querySelector('#' + pageId);

    // 只显示当前步骤
    pageEl.querySelectorAll('[data-step]').forEach(function(el) {
        var steps = el.getAttribute('data-step');
        if (!steps) {
            return;
        }
        if (steps && steps.split(',').indexOf(stepName) > -1) {
            el.classList.remove('none');
        } else {
            el.classList.add('none');
        }
    });
    // 只显示当前场景
    pageEl.classList.remove('none')

    if (scene.start) {
        scene.start();
    }
    if (scene.autoFinshTime) {
        var t = new Date().getTime();
        setTimeout(function() {
            self.finish(scene);
        }, scene.autoFinshTime)
    }
    self._emit("scene." + scene.name + '.enter');
}

Scene.prototype.finish = function(scene, callback) {
    var self = this;
    if (scene.leaveClass) {
        var pageId = scene.name.split('.')[0];
        document.getElementById(pageId).classList.add(scene.leaveClass);
        setTimeout(function() {
            self._emit("scene." + scene.name + '.finish');
            self.character.finishScene(scene);
            callback && callback();
        }, 500);
    } else {
        self._emit("scene." + scene.name + '.finish');
        self.character.finishScene(scene);
        callback && callback();
    }
}
Scene.prototype.next = function() {
    var self = this;
    if (self.currentScene) {
        self.finish(self.currentScene, function() {
            var currentSceneIdx = self.scenes.indexOf(self.currentScene);
            self.enter(self.scenes[currentSceneIdx + 1]);
        });

    } else {
        self.enter(self.scenes[0])
    }
}
var sceneList = [{
    name: 'loading.s1',
    autoFinshTime: 3000, // 自动完成改场景
}, {
    name: "p1.s1",
    start: function() {}, //场景开始的回调
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p3.s2",
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p2.s0.finish'
    }
}, {
    name: "p3.s3",
    //没有定义 enterTrigger 时 只有在调用 scene.enter(...)进入。不自动处理
}]
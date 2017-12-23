var sceneList = [{
    name: 'loading.s1',
    autoFinshTime: 1000, // 自动完成改场景
}, {
    name: "p0",
    // start: function() {}, //场景开始的回调
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p1",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s10",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s20",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s30",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s40",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s50",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s60",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s70",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "loading.s1",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p3",
    autoFinshTime: 1500, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s10",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s20",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s30",
    // autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s40",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p4.s50",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s60",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p1",
    autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'event',
    //     eventName: 'boy.p2.s0.finish'
    // }
}, {
    name: "p3.s3",
    //没有定义 enterTrigger 时 只有在调用 scene.enter(...)进入。不自动处理
}]
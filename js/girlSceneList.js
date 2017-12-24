var sceneList = [{
    name: 'loading.s1',
    start: startLoding
}, {
    name: "p0",
    start: startP0
    // start: function() {}, //场景开始的回调
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p1",
    start: startP1
}, {
    name: "p2.s10",
    start: startP2,
    autoFinshTime: 600, // 自动完成改场景
}, {
    name: "p2.s20",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s21",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s30",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s40",
    // autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s50",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p2.s60",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p2.s70",
    start: startP2S70
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p3",
    autoFinshTime: 2000, // 自动完成改场景
    start:startP3,
    enterTrigger: {
        type: 'event',
        eventName: 'boy.loading.s1.finish'
    }
}, {
    name: "p4.s10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s20",
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s30",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p4.s40",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p4.s50",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p4.s60",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p5",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p6.s10",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p6.s20",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p6.s30",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p6.s40",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p6.s50",
    start:startP6,
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p6.s60",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p7",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "pk",
    start:startPk,
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p9.s10",
    start:startP9S1O,
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p9.s20",
    start:startP9S2O,
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p10",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p11",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p11.s10",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}]
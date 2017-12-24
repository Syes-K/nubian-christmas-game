var sceneList = [{
    name: 'loading.s1',
    start: startLoding
}, {
    name: "p0",
    start: startP0
    // start: function() {}, //场景开始的回调
    // autoFinshTime: 2000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p1",
    start: startP1,
    leaveClass: 'anim-opacity'
}, {
    name: "p2.s10",
    start: startP2,
    autoFinshTime: 600, // 自动完成改场景
}, {
    // 文字气泡
    name: "p2.s20",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 图形气泡
    name: "p2.s21",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    //女孩（蹲）
    name: "p2.s30",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s40",
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s50",
    // autoFinshTime: 2000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p2.s60",
    // autoFinshTime: 2000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p2.s70",
    start: startP2S70
    // autoFinshTime: 2000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p3",
    // autoFinshTime: 4000, // 自动完成改场景
    start: startP3,
    enterTrigger: {
        type: 'event',
        eventName: 'boy.loading.s1.finish'
    }
}, {
    name: "p4.s10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p1.finish'
    }
}, {
    // 文字气泡
    name: "p4.s20",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p4.s30",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 文字气泡
    name: "p4.s40",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p2.s30.finish'
    }
}, {
    name: "p4.s50",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 文字气泡
    name: "p4.s70",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p2.s60.finish'
    }
}, {
    name: "p4.s80",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 文字气泡
    name: "p4.s90",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p2.s80.finish'
    }
}, {
    name: "p4.s100",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 女孩
    name: "p5.s10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p5.s20",
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p5.s10.finish'
    }
}, {
    name: "p6.s10",
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p5.s40.finish'
    }
}, {
    name: "p6.s20",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p6.s20.finish'
    }
}, {
    // 文字气泡
    name: "p6.s30",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 文字气泡
    name: "p6.s40",
    autoFinshTime: 5000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p6.s40.finish'
    }
}, {
    name: "p6.s50",
    start: startP6,
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p6.s50.finish'
    }
}, {
    // 文字气泡
    name: "p6.s60",
    autoFinshTime: 6000,
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    // 文字气泡
    name: "p6.s70",
    autoFinshTime: 5000,
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p7.s10",
    start: startP7S10,
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p7.s30",
    start: startP7S30,
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p7.s20.finish'
    }

}, {
    name: "p7.s50",
    start: startP7S50,
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p7.s40.finish'
    }

}, {
    name: "p7.s70",
    start: startP7S70,
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p7.s60.finish'
    },
    leaveClass: 'anim-opacity'
}, {
    name: "pk",
    start: startPk,
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'boy.p7.s80.finish'
    }
}, {
    name: "p9.s10",
    start: startP9S1O,
    autoFinshTime: 2000 // 自动完成改场景
}, {
    name: "p9.s20",
    start: startP9S2O,
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p11",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p11.s10",
    start: startP11S10,
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p11.s20",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}]


var loadingScenes=[
    "loading",
    "p0",
]
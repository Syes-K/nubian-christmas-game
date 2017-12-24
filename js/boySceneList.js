var sceneList = [{
    name: 'loading.s1',
    start: startLoding
}, {
    name: "p1",
    start: startP1,
    autoFinshTime: 4000, // 自动完成改场景
}, {
    name: "p2.s10",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s30",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s20.finish'
    }

}, {
    name: "p2.s40",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s50",
    autoFinshTime: 500, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s40.finish'
    }
}, {
    name: "p2.s60",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s70",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s80",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s70.finish'
    }
}, {
    name: "p2.s90",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s100",
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s90.finish'
    }
}, {
    name: "p5.s10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s100.finish'
    }
}, {
    name: "p5.s20",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p5.s30",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p5.s40",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p6.s10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p6.s20",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p6.s30",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p6.s30.finish'
    }
}, {
    name: "p6.s40",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p6.s50",
    start: startP6,
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p6.s40.finish'
    }
}, {
    name: "p6.s60",
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p6.s70.finish'
    }
}, {
    name: "p7.s10",
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p6.s70.finish'
    }
}, {
    name: "p7.s20",
    start: startP7S20,
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p7.s10.finish'
    }
}, {
    name: "p7.s40",
    start: startP7S40,
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p7.s30.finish'
    }
}, {
    name: "p7.s60",
    start: startP7S60,
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p7.s50.finish'
    }
}, {
    name: "p7.s80",
    start: startP7S80,
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p7.s70.finish'
    },
    leaveClass: 'anim-opacity'
}, {
    name: "pk",
    start: startPk,
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
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
    autoFinshTime: 3000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    },
    leaveClass: 'anim-opacity'
}, {
    name: "p11",
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p11.s10",
    start: startP11S10,
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}]
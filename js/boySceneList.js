var sceneList = [{
    name: 'loading.s1',
    start: startLoding
}, {
    name: "p1",
    start:startP1,
    autoFinshTime: 2000, // 自动完成改场景
}, {
    name: "p2.s10",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s20",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s20.finish'
    }
},{
    name:'p2.s21',
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s30",
    // autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s30.finish'
    }
}, {
    name: "p2.s40",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
},{
    name: "p2.s41",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s50",
    autoFinshTime: 2000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s40.finish'
    }
},{
    name: "p2.s51",
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p2.s60",
    // autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s50.finish'
    }
}, {
    name: "p5.s10",
    // autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'event',
        eventName: 'girl.p4.s61.finish'
    }
}, {
    name: "p5.s20",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}, {
    name: "p5.s30",
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
    // start:startP6,
    autoFinshTime: 1000, // 自动完成改场景
    enterTrigger: {
        type: 'last.finish'
    }
}, {
    name: "p6.s60",
    autoFinshTime: 1000, // 自动完成改场景
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
},{
    name: "p11.s10",
    // autoFinshTime: 1000, // 自动完成改场景
    // enterTrigger: {
    //     type: 'last.finish'
    // }
}]
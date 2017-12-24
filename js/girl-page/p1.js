function startP1() {
    var str = "去年圣诞节和男票分手!今年心爱的喵子居然也不见了！这一定是我的.....圣诞节"
    var strElements = [{
        id: 'p1-word1',
        length: 11,
    }, {
        id: 'p1-word2',
        length: 9,
    }, {
        id: 'p1-word3',
        length: 5,
    }, {
        id: 'p1-word4',
        length: 11,
    }, {
        id: 'p1-word5',
        length: 1,
    }, {
        id: 'p1-word6',
        length: 1,
    }, {
        id: 'p1-word7',
        length: 1,
    }]
    strElements.forEach(function(el) {
        document.getElementById(el.id).innerHTML = '';
    });

    function inputWords(str, strElements, callback) {
        var length = str.length;
        var i = 0;
        var time = setInterval(function() {
            if (i > length) {
                clearInterval(time)
                callback && callback();
            } else {
                var currentIdx = getIndexFromStrElements(i, strElements);
                var currentEl = strElements[currentIdx];
                var lastCount = strElements.reduce(function(value, nextItem, idx) {
                    if (idx < currentIdx) {
                        return value + nextItem.length
                    } else {
                        return value;
                    }
                }, 0)
                var currentCount = i - lastCount;
                document.getElementById(currentEl.id).innerHTML = str.substr(lastCount, currentCount)
                i++;
            }
        }, keyTime)
    }

    function getIndexFromStrElements(i, strElements) {
        var index = -1;
        strElements.reduce(function(value, nextItem, idx) {
            var nextValue = value + nextItem.length;
            if (index === -1 && nextValue >= i) {
                index = idx;
            }
            return nextValue;
        }, 0)
        if (index === -1) {
            index = strElements.length;
        }
        return index;
    }
    inputWords(str, strElements, function() {
        setTimeout(function() {
            var lastStrElement = strElements[strElements.length - 1];
            document.getElementById(lastStrElement.id).innerHTML = "";
            setTimeout(function() {
                document.getElementById(lastStrElement.id).innerHTML = "劫";
                setTimeout(function() {
                    scene.next();
                }, keyTime * 3);
            }, keyTime) * 2;
        }, keyTime)

    })
}
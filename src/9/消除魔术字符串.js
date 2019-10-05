/*
    魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
 */
const shapeType = {
    triangle: Symbol()
};
function getArea(shape, options) {
    let area = 0;
    switch (shape) {
        case shapeType.triangle :
            area = .5 * options.width * options.height;
            break;
    }
    return area;
}
console.log(getArea(shapeType.triangle, {width: 100, height: 100}));
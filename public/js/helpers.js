// Create an instance of Reactive with element, templateId and data
function createRactive(element, templateId, data) {
    return new Ractive({
        el: element,
        template: templateId,
        data: data
    });
}

// find a progress bar by its attribute
function findBarByAttribute(bars, attribute, barId) {
    console.log("barId -> " , barId);
    console.log("bars -> " ,  JSON.stringify(bars));
    var x = bars.find(function (_bar) {
        console.log(JSON.stringify(_bar));
        return _bar[attribute] === barId;
    });
    console.log(x);
    return x;
}

// return sum of oldValue and num if the sum is larger than or equal to min
// otherwise return oldValue
function addValue(oldVal, num, min) {
    return (oldVal + num >= min ? oldVal + num : 0);
}

// update color of a progress bar if its currentValue is larger than its colorChangeThreshold
function updateColor(bar) {
    $('#' + bar.id).css('background', (bar.currentValue > bar.colorChangeThreshold ? bar.color_high : bar.color_low));
}

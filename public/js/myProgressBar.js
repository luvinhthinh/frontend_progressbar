var ractive = createRactive('#container', '#template-progressbar', {bars: bars, buttons: buttons});

// Ractive to handle 'add' event which is attached to every button
ractive.on('add', function (event, value) {
    var barId = ractive.get('selectedBar');

    // retrieve the selection of progress bar from drop down list
    var bar = findBarByAttribute(bars, 'id', barId);

    // update the current percentage of usage
    bar.currentValue = addValue(bar.currentValue, value, bar.min);

    // force Ractive to re-compile the template
    ractive.update();

    // update color if percentage is larger than threshold
    updateColor(bar);
});
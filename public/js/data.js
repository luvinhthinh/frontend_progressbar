// bars is an array of progress bar information
// each bar has an unique id used to identify itself to change color
// each bar has name displayed in the drop down list to be selected
// min is the lower bound of progress bar
// colorChangeThreshold : color of progress bar when its currentValue is below the limit
// currentValue represents current value of progress bar at one time
// color_low represents color when currentValue is less than colorChangeThreshold
// color_high represents color when currentValue is more than colorChangeThreshold

bars = [
    {
        id : 'b1',
        name : '#progress1',
        min : 0,
        colorChangeThreshold : 100,
        currentValue : 25,
        color_low : 'lightblue',
        color_high : 'red'
    },
    {
        id : 'b2',
        name : '#progress2',
        min : 0,
        colorChangeThreshold : 100,
        currentValue : 50,
        color_low : 'lightblue',
        color_high : 'red'
    },
    {
        id : 'b3',
        name : '#progress3',
        min : 0,
        colorChangeThreshold : 100,
        currentValue : 75,
        color_low : 'lightblue',
        color_high : 'red'
    }
];

// buttons is an array of button containing value to add/substract to the currentValue of one progress bar
buttons = [
    {value:-25, label : '-25'},
    {value:-10, label : '-10'},
    {value:10, label : '+10'},
    {value:25, label : '+25'}
];

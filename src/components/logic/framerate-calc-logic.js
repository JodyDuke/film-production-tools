export const frameCalc = (props, framerate) => {
    let h = props.reduce((a, b) => (a + b.hours), 0)
    let m = props.reduce((a, b) => (a + b.minutes), 0)
    let s = props.reduce((a, b) => (a + b.seconds), 0)
    let f = props.reduce((a, b) => (a + b.frames), 0)

    //Checks if total frames are more than the selected framerate, if yes adds a second and removes the frames
    if (f >= framerate) {
        s += Math.floor(f / framerate)
        f = (f % framerate)
    };

    //Checks if total seconds are more than 60, if yes adds a minute and removes 60 secs >= 60) {
    if (s >= 60) {
        m += Math.floor(s / 60)
        s = (s % 60)
    }

    //Checks if total minutes are more than 60, if yes adds an hour and removes 60 minutes  
    if (m >= 60) {
        h += Math.floor(m / 60)
        m = (m % 60)
    }

    //console.log(framerate)
    //console.log(props)
    //console.log('totalTime: ', h + ' : ' + m + ' : ' + s + ' : ' + f)
    return h + ' : ' + m + ' : ' + s + ' : ' + f
}


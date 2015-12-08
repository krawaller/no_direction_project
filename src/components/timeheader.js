import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

let inlineStyle = { 
                    display:"inline", 
                    margin:'1em'
                }


let TimeHeader =(props)=> 
{
    let swTime = props.stopwatch.stopwatchTime,
        swOn = props.stopwatch.stopwatchOn,
        tOn = props.timer.timerOn,
        tTime = props.timer.timerTime


    return <div>
            <h1 style={inlineStyle}>No direction project</h1>
            {(swOn || swTime>0)
            ?<h2 style={inlineStyle}>Stopwatch: {swTime}</h2>
            :null }
            {(tOn || tTime>0)                
            ?<h2 style={inlineStyle}>Timer: {tTime}</h2>
            :null }
            </div>
}

/*
     let swOn = this.props.stopwatch.stopwatchOn
    let swTime = this.props.stopwatch.stopwatchTime


                {(swOn===true)
                    ?<p>{swTime}</p>
                    :null
                }
*/

TimeHeader.propTypes = {
    stopwatch: PropTypes.shape({
        stopwatchTime: PropTypes.number.isRequired,
        stopwatchOn: PropTypes.bool.isRequired
    }),
    timer: PropTypes.shape({
        timerTime: PropTypes.number.isRequired,
        timerOn: PropTypes.bool.isRequired
    }),

}


let mapStateToProps = (state) => {
    return { 
        timer:state.timer,
        stopwatch:state.stopwatch
    }
}

export default connect(mapStateToProps)(TimeHeader)

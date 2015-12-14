/***************
Text clock
***************/
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';


let textTimeHour =()=>{
	let timeMap = new Map();
	timeMap.set(1, "ett");
	timeMap.set(2, "två");
	timeMap.set(3, "tre");
	timeMap.set(4, "fyra");
	timeMap.set(5, "fem");
	timeMap.set(6, "sex");
	timeMap.set(7, "sju");
	timeMap.set(8, "åtta");
	timeMap.set(9, "nio");
	timeMap.set(10, "tio");
	timeMap.set(11, "elva");
	timeMap.set(12, "tolv");
	timeMap.set(13, "ett");
	timeMap.set(14, "två");
	timeMap.set(15, "tre");
	timeMap.set(16, "fyra");
	timeMap.set(17, "fem");
	timeMap.set(18, "sex");
	timeMap.set(19, "sju");
	timeMap.set(20, "åtta");
	timeMap.set(21, "nio");
	timeMap.set(22, "tio");
	timeMap.set(23, "elva");
	timeMap.set(24, "tolv");
	return timeMap;
} 


let textTimeMinute =()=> {
	let timeMap = new Map();
	timeMap.set(0, "");
	timeMap.set(1, "en");
	timeMap.set(2, "två");
	timeMap.set(3, "tre");
	timeMap.set(4, "fyra");
	timeMap.set(5, "fem");
	timeMap.set(6, "sex");
	timeMap.set(7, "sju");
	timeMap.set(8, "åtta");
	timeMap.set(9, "nio");
	timeMap.set(10, "tio");
	timeMap.set(11, "elva");
	timeMap.set(12, "tolv");
	timeMap.set(13, "tretton");
	timeMap.set(14, "fjorton");
	timeMap.set(15, "femton");
	timeMap.set(16, "sexton");
	timeMap.set(17, "sjutton");
	timeMap.set(18, "arton");
	timeMap.set(19, "nitton");
	timeMap.set(20, "tjugo");
	timeMap.set(30, "trettio");
	return timeMap;
}

let getTextTimeAccurate = (timeNow)=> {
	let firstToUpperCase= (str)=> { 
		return str.substr(0, 1).toUpperCase() + str.substr(1); 
	}
	let minute = timeNow.minutes(),
		returnTime = '';
	if(minute===0) {
		return firstToUpperCase(textTimeHour().get(timeNow.hours()));
	}

	if(minute>30) {
		minute=60-minute;
	}

	if(minute>20) {
		returnTime+=textTimeMinute().get(Math.floor(minute/10)*10);
		returnTime+=textTimeMinute().get((minute%10));
	}
	else {
		returnTime+=textTimeMinute().get(minute);
	}

	if(minute<2) {
		returnTime+= ' minut';
	}		
	else {
		returnTime+= ' minuter';
	}

	if(timeNow.minutes()>30) {
		returnTime+= ' i';
		returnTime+= ' '+textTimeHour().get(timeNow.hours()+1);
	}
	else {
		returnTime+= ' över';			
		returnTime+= ' '+textTimeHour().get(timeNow.hours());
	}
	return firstToUpperCase(returnTime);
}


let TextClock = (props)=> {

	return <div>
	{(props.time.realTime!=null)
	?<section>
	<h1>Texttid: {getTextTimeAccurate(props.time.realTime)}</h1>
	</section>
	:null
	}
	</div>
}

TextClock.propTypes = {
    time: PropTypes.shape({
        realTime:PropTypes.object.isRequired
    })
};


let mapStateToProps = (state) => {
    return { 
        time:state.time,
    };
};

export default connect(mapStateToProps)(TextClock);

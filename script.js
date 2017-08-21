document.addEventListener('scroll', timeline);

function timeline(){
	//compare scrolltop with scrolltop on each timeline event
	var threshold_position = window.scrollY + window.innerHeight / 2;

	var timeline_events = document.querySelectorAll('.timeline li');
	for(i in timeline_events){
		if(timeline_events[i].offsetTop < threshold_position){
			timeline_events[i].classList.add('in');
		} else {
			timeline_events[i].classList.remove('in');
		}
	}
}
timeline();

function validate(e){
    if(e) e.preventDefault();
    let eventName = document.getElementById('event-name').value;
    let eventDateString = document.getElementById('event-date').value;
    let eventDate = new Date(eventDateString)
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;
    let eventDescription = document.getElementById('event-description').value;
    let location = document.getElementById('location').value;
    let error = document.getElementById('error-field');
    let body = document.getElementsByClassName('container');
    let invitation = document.getElementById("invitation-section");
    let container = document.getElementsByClassName('container');
    if(!eventName || isNaN(eventDate.getTime()) || !startTime || !endTime || !eventDescription || !location){
        // alert("Please fill all the fields")
        error.classList.add('show')
        body[0].style.backgroundColor= "gray";
        return;
    }else{
        error.classList.remove('show')
        let name = document.getElementById("eventName");
        let date = document.getElementById("date");
        let time = document.getElementById("time");
        let loc = document.getElementById("loc");
        let des = document.getElementById("description");
        name.textContent = eventName;
        console.log(eventDate);
        date.textContent = eventDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        time.textContent = `${startTime} - ${endTime}`;
        loc.textContent = location;
        des.textContent = eventDescription
        body[0].style.backgroundColor = "";
        invitation.classList.add('show');
        container[0].style.visibility = 'hidden';
        container[0].style.opacity = 0;
    }
    
}
function remove(){
    let error = document.getElementById("error-field")
    error.classList.remove('show')
}
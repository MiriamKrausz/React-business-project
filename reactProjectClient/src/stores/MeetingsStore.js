
import { observable, action, makeObservable } from 'mobx';
import Swal from 'sweetalert2';
class Meetings {
    constructor() {
        makeObservable(this, {
            getMeetings: action,
            meetingseArr: observable,
            addMeeting: action,
        })
    }
    
    meetingseArr =[]
    getMeetings=async()=>{
        const response1=await fetch("http://localhost:8787/appointments",{
            headers: {
                "Content-Type": "application/json"
            },  
        });
        this.meetingseArr=await response1.json();//ממלא את המערך המקומי כל עוד יש תגובה לבקשה (כל עוד יש פגישות)
        const sortedData = [...this.meetingseArr].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meetingseArr = sortedData;
    }
    addMeeting=async(meeting)=>{ 
        console.log("addsemeeting")  
        // console.log("service",service);
        // console.log("service json",JSON.stringify(service));
        const response=await fetch("http://localhost:8787/appointment",{
            method: "POST",
            body: JSON.stringify(meeting),
            headers: {
              "Content-Type": "application/json",
            },  
        });
        if(response.status===200){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Meeting scheduled",
                showConfirmButton: false,
                timer: 1500
              });
        // console.log(response.status)
        this.getMeetings();//כדי לעדכן את המערך המקומי
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "The appointed time is already taken",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    }
}
export default new Meetings();
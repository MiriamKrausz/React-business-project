
import { observable, action, computed, makeObservable } from 'mobx';
class ServiceStore {
    constructor() {
        makeObservable(this, {
            getServices: action,
            serviceArr: observable,
            addService: action,
        })
    }
    serviceArr = []
    service1 = {
        id: '1',
        name: 'Counseling sessions and guidance',
        description: 'The purpose of the counseling and orientation meetings is to check with the applicant his desires and abilities and to build.',
        price: '300',
        imgService: '../src/assets/images/יעוץ.jpg'
    }
    service2=
    {
        name: 'Workshops for the world of employment',
        description: 'The workshops give the participants background on the job market they are applying for.',
        price: '900',
        imgService: '../src/assets/images/arrow.jpg'

    }
    service3=
    {
        name: 'diagnoses',
        description: 'The occupational diagnosis is intended for applicants who are debating about a suitable field of occupation or a suitable profession.',
        price: '250',
        imgService: '../src/assets/images/השכלה.jpg'

    }
    getServices=async()=>{
        await fetch("http://localhost:8787/service",{
            method:"post",
            body:JSON.stringify(this.service1),
            headers: {
                "Content-Type": "application/json"
            },
        });
        await fetch("http://localhost:8787/service",{
            method:"post",
            body:JSON.stringify(this.service2),
            headers: {
                "Content-Type": "application/json"
            },
        });
        await fetch("http://localhost:8787/service",{
            method:"post",
            body:JSON.stringify(this.service3),
            headers: {
                "Content-Type": "application/json"
            },
        });
        //עדכון למערך שיכיל לפחות שירות אחד
        const response1=await fetch("http://localhost:8787/services",{
            headers: {
                "Content-Type": "application/json"
            },  
        });
        this.serviceArr=await response1.json();
        //ממלא את המערך המקומי כל עוד יש תגובה לבקשה (כל עוד יש שירותים)
    }
    addService=async(service)=>{
        console.log("addserv")
        console.log("service",service);
        console.log("service json",JSON.stringify(service));
        const response=await fetch("http://localhost:8787/service",{
            method: "POST",
            body: JSON.stringify(service),
            headers: {
              "Content-Type": "application/json",
            },  
        });
        console.log(response.status)
        this.getServices();//כדי לעדכן את המערך המקומי
    }
}
export default new ServiceStore();




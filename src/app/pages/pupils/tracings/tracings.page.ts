import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../../../services/pupils/pupils.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TracingActivitiesService } from '../../../services/tracing-activities/tracing-activities.service';
import { TracingTestsService } from '../../../services/tracing-tests/tracing-tests.service';
import { AuthService } from '../../../services/auth/auth.service';
import { ActivitiesService } from '../../../services/activities/activities.service';

@Component({
  selector: 'app-tracings',
  templateUrl: './tracings.page.html',
  styleUrls: ['./tracings.page.scss'],
})
export class TracingsPage implements OnInit {
  pupilId: any;
  pupil = {name: "", dni:"", course:"", last_name:""};
  tracings_acts: any;
  activities: any;
  // activity:  {name: "", file_type:""};
  tracings_tests: any;
  
  constructor(private pupilsService: PupilsService, private activatedRoute: ActivatedRoute, 
    private navCtrl: NavController, private tracActService: TracingActivitiesService, 
    private tracTestService: TracingTestsService, private authService: AuthService,
    private activityService: ActivitiesService) {
      this.getActivities();
      this.getTracingTests();
  }
 
  ngOnInit() {
    this.pupilId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getPupil(this.pupilId);
    this.getTracingActivities();
  }


  setPupil(data: any){
    this.pupil = data.Pupil;
    console.log(this.pupil)
  }

  getPupil($id: any){
    this.pupilsService.getPupil($id).then(data=>{this.setPupil(data)});
  }


  setTracingActivities(data: any){
    this.tracings_acts = data.Tracking_activities.filter((tracing) => tracing.pupil_id == this.pupilId);
    console.log(this.tracings_acts)
  }

  setActivities(data: any){
    this.activities = data.Activities
  }

  getTracingActivities(){
    this.tracActService.getAllTracings().then(data => {
      this.setTracingActivities(data)
    });
  }

  getActivities(){
    this.activityService.getAllActs().then(data => {
      this.setActivities(data)
    });
  }

  getName($id){
    for (let index = 0; index < this.activities.length; index++) {
      if(this.activities[index].id == $id){
        return this.activities[index].name
      } 
    }
  }

  getCategory($id){
    for (let index = 0; index < this.activities.length; index++) {
      if(this.activities[index].id == $id){
        return this.activities[index].file_type
      } 
    }
  }


  setTracingTests(data: any){
    this.tracings_tests = data.Tracking_tests.filter((tracing) => tracing.pupil_id == this.pupilId);
    console.log(this.tracings_tests)
  }

  getTracingTests(){
    this.tracTestService.getAllTracings().then(data => {
      this.setTracingTests(data)
      console.log(data);
    });
  }

  printResult(result: boolean){
    if(result){
      return "Positivo"
    }else{
      return "Negativo"
    }
  }

  isCounselor(){
    if (this.authService.getTypeUser() == "counselor"){
      console.log(this.authService.getTypeUser())
      return true
    }else{
      return false
    }
  }

  getDate($date){
    return $date.toDateString()
  }
}

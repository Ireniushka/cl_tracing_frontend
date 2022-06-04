import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../../services/activities/activities.service';
import { TracingActivitiesService } from '../../../services/tracing-activities/tracing-activities.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PupilsService } from '../../../services/pupils/pupils.service';

@Component({
  selector: 'app-new-tracing',
  templateUrl: './new-tracing.page.html',
  styleUrls: ['./new-tracing.page.scss'],
})
export class NewTracingPage implements OnInit {
  activities: any;
  newTracing = {pupil_id: 0, activity_id: 5, comment: ""};
  pupil =  {name: 5, last_name: ""};


  constructor(private actService: ActivitiesService, private tracActService: TracingActivitiesService,
    private activatedRoute: ActivatedRoute, private navCtrl: NavController, private pupilService: PupilsService) { }

  ngOnInit() {
    this.newTracing.pupil_id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getActivities();
    this.getDataPupil();
  }

  setActivityId($event){
    this.newTracing.activity_id = $event.detail.value
  }

  setActivities(data: any){
    this.activities = data.Activities
  }

  setPupil($data: any){
    this.pupil.name = $data.Pupil.name
    this.pupil.last_name = $data.Pupil.last_name
  }

  getActivities(){
    this.actService.getAllActs().then(data => {
      this.setActivities(data)
    });
  }

  getDataPupil(){
    this.pupilService.getPupil(this.newTracing.pupil_id).then(data => this.setPupil(data));
  }

  setNewTracing(){
    this.tracActService.createTracing(this.newTracing);
    console.log("nuevo", this.newTracing)
    this.navCtrl.navigateRoot('options-pupils');
  }

}

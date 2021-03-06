import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../../services/activities/activities.service';
import { TracingActivitiesService } from '../../../services/tracing-activities/tracing-activities.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PupilsService } from '../../../services/pupils/pupils.service';
import { getTrailingCommentRanges } from 'typescript';

@Component({
  selector: 'app-update-tracing',
  templateUrl: './update-tracing.page.html',
  styleUrls: ['./update-tracing.page.scss'],
})
export class UpdateTracingPage implements OnInit {
  activities: any;
  tracing = {id: 0, pupil_id: 0, activity_id: 0, comment: ""};
  pupil =  {name: "", last_name: ""};
  pupils: any;


  constructor(private actService: ActivitiesService, private tracActService: TracingActivitiesService,
    private activatedRoute: ActivatedRoute, private navCtrl: NavController, private pupilService: PupilsService) { }

  ngOnInit() {
    this.tracing.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getTracing()
    this.getActivities();
  }

  setActivityId($event){
    this.tracing.activity_id = $event.detail.value;
  }

  setPupilId($event){
    this.tracing.pupil_id = $event.detail.value;
  }

  setActivities(data: any){
    this.activities = data.Activities
  }

  setPupil($data: any){
    this.pupil.name = $data.Pupil.name
    this.pupil.last_name = $data.Pupil.last_name
  }

  setAllPupils($data: any){
    this.pupils = $data.Pupils;
  }
  setTracing($data: any){
    this.tracing = $data.Tracking_Activity;
    this.getDataPupil();
  }

  getActivities(){
    this.actService.getAllActs().then(data => {
      this.setActivities(data);
    });
  }

  getDataPupil(){
    this.pupilService.getPupil(this.tracing.pupil_id).then(data => this.setPupil(data));
  }

  getPupils(){
    this.pupilService.getAllPupils().then(data => {
      this.setAllPupils(data);
    });
  }

  getTracing(){
    this.tracActService.getTracingData(this.tracing.id).then(data => this.setTracing(data));
  }

  setUpdateTracing(){
    //this.tracActService.updateTracing(this.tracing, this.tracing.id);
    console.log("nuevo", this.tracing);
    this.navCtrl.navigateRoot('options-pupils');
  }
}

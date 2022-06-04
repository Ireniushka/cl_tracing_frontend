import { Component, OnInit } from '@angular/core';
import { TracingTestsService } from '../../../services/tracing-tests/tracing-tests.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PupilsService } from '../../../services/pupils/pupils.service';

@Component({
  selector: 'app-update-tracing',
  templateUrl: './update-tracing.page.html',
  styleUrls: ['./update-tracing.page.scss'],
})
export class UpdateTracingPage implements OnInit {
  tracing = {id: 0, pupil_id: 0, comment: "", lat_cruzada: true};
  pupil =  {name: "", last_name: ""};
  pupils: any;


  constructor(private tracTestService: TracingTestsService, private activatedRoute: ActivatedRoute, 
    private navCtrl: NavController, private pupilService: PupilsService) { }

  ngOnInit() {
    this.tracing.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getTracing();
  }

  setPupilId($event){
    this.tracing.pupil_id = $event.detail.value;
  }

  setPupil($data: any){
    this.pupil.name = $data.Pupil.name
    this.pupil.last_name = $data.Pupil.last_name
  }

  setAllPupils($data: any){
    this.pupils = $data.Pupils;
  }

  setResult($event){
    this.tracing.lat_cruzada = $event.detail.value;
  }

  setTracing($data: any){
    this.tracing = $data.Tracking_Activity;
    this.getDataPupil();
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
    this.tracTestService.getTracingData(this.tracing.id).then(data => this.setTracing(data));
  }

  setUpdateTracing(){
    //this.tracTestService.updateTracing(this.tracing, this.tracing.id);
    console.log("nuevo", this.tracing);
    this.navCtrl.navigateRoot('options-pupils');
  }
}

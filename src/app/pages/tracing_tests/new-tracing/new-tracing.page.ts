import { Component, OnInit } from '@angular/core';
import { TracingTestsService } from '../../../services/tracing-tests/tracing-tests.service';
import { ActivatedRoute } from '@angular/router';
import { PupilsService } from '../../../services/pupils/pupils.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-tracing',
  templateUrl: './new-tracing.page.html',
  styleUrls: ['./new-tracing.page.scss'],
})
export class NewTracingPage implements OnInit {
  newTracing = {id: 0, pupil_id: 0, comment: "", lat_cruzada: true};
  pupil =  {name: "", last_name: ""};


  constructor(private tracTestService: TracingTestsService, private activatedRoute: ActivatedRoute, 
    private navCtrl: NavController, private pupilService: PupilsService) { }

  ngOnInit() {
    this.newTracing.pupil_id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getDataPupil();
  }

  setPupil($data: any){
    this.pupil.name = $data.Pupil.name;
    this.pupil.last_name = $data.Pupil.last_name;
  }

  setResult($event){
    this.newTracing.lat_cruzada = $event.detail.value;
  }

  getDataPupil(){
    this.pupilService.getPupil(this.newTracing.pupil_id).then(data => this.setPupil(data));
  }

  setNewTracing(){
    //this.tracTestService.updateTracing(this.newTracing, this.newTracing.id);
    console.log("nuevo", this.newTracing);
    this.navCtrl.navigateRoot('options-pupils');
  }
}

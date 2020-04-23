import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {

  visitorForm: FormGroup;
  showWebcam = true;
  allowCameraSwitch = true;
  multipleWebcamsAvailable = false;
  trigger: Subject<void> = new Subject<void>();
  imageCaptureText: boolean = false;
  errors: WebcamInitError[] = [];
  Capturedimage: string;

  typeOfVisit = [
    { id: 1, reason: 'Meeting' },
    { id: 2, reason: 'Delivery' },
    { id: 3, reason: 'Personal' },
  ]
  
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.visitorForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,4}")])],
      visitType: ['', Validators.required],
      personToMeet: ['', Validators.required],
      date: ['', Validators.required],
      entryTime: ['', Validators.required],
      exitTime: ['', Validators.required]
    });

    this.visitorForm.patchValue({
      date: new Date()
    });

    this.visitorForm.get('date').disable();

  }

  get f() { 
    return this.visitorForm.controls; 
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    if(webcamImage) {
      this.imageCaptureText = true;
      this.Capturedimage = webcamImage.imageAsDataUrl;
    }
  }

  handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  visitor_Form() {
    if(this.visitorForm.invalid) {
      return;
    } else {
      const vistorDetails = this.visitorForm.value;
      vistorDetails['imageUrl'] = this.Capturedimage;
      vistorDetails['date'] = new Date();
      this.router.navigateByUrl('visitorDetails');
      localStorage.setItem('userDetails', JSON.stringify(vistorDetails));
    }
  }

}

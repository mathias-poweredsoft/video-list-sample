import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ContactUsService, IContactUsForm } from 'src/app/services/contact-us.service';

@Component({
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss']
})
export class ContactUsPage implements OnInit {
  form: FormGroup = this.formBuilder.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
  loading: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder, 
    public contactUsService: ContactUsService,
    private toastCtrl: ToastController) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;

    let data: IContactUsForm = {
      fullName: this.form.controls['fullName'].value,
      email: this.form.controls['email'].value,
      message: this.form.controls['message'].value
    };

    this.loading = true;
    this.contactUsService.send(data)
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe(async () => {
        const toast = await this.toastCtrl.create({
          message: 'You have sent a message!',
          duration: 2000,
          position: 'bottom',
          color: 'success'
        });
        await toast.present();
      },
      (error) => {
        console.log('error =>', error);
      });
  }
}

import {Component, OnInit} from '@angular/core';
import {ApplicantService} from '../service/applicant.service';
import {Applicant} from '../models/applicant';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nuevo-applicant',
  templateUrl: './nuevo-applicant.component.html',
  styleUrls: ['./nuevo-applicant.component.css']
})
export class NuevoApplicantComponent implements OnInit {

  ci: number = null;
  name: '';
  fatherLastName: '';
  motherLastName: '';
  email: '';
  cellphone: number = null;
  phone: number = null;

  constructor(
    private applicantService: ApplicantService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onCreate(): void {
    const applicant = new Applicant(this.ci, this.name, this.fatherLastName,
      this.motherLastName, this.email, this.cellphone, this.phone);
    this.applicantService.save(applicant).subscribe(
      data => {
        this.toastr.success('Applicant Created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}

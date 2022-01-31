import { Component, OnInit } from '@angular/core';
import { Applicant} from '../models/applicant';
import { ApplicantService } from '../service/applicant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-applicant',
  templateUrl: './lista-applicant.component.html',
  styleUrls: ['./lista-applicant.component.css']
})
export class ListaApplicantComponent implements OnInit {

  applicants: Applicant[] = [];

  constructor(
    private applicantService: ApplicantService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarApplicants();
  }

  cargarApplicants(): void {
    this.applicantService.lista().subscribe(
      data => {
        this.applicants = data;
      },
      err => {
        console.log(err);
      }
    );
  }



}

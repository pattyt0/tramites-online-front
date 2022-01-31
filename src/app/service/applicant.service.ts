import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Applicant} from '../models/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  applicantURL = 'http://localhost:8080/paperwork/';

  constructor(private httpClient: HttpClient) {
  }

  public lista(): Observable<Applicant[]> {
    return this.httpClient.get<Applicant[]>(this.applicantURL + 'list');
  }

  /*
  public detail(id: number): Observable<Applicant> {
    return this.httpClient.get<Applicant>(this.applicantURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detailname/${nombre}`);
  }
*/
  public save(applicant: Applicant): Observable<any> {
    return this.httpClient.post<any>(this.applicantURL + 'create', applicant);
  }

  /* public update(id: number, applicant: Applicant): Observable<any> {
     return this.httpClient.put<any>(this.applicantURL + `update/${id}`, applicant);
   }

   public delete(id: number): Observable<any> {
     return this.httpClient.delete<any>(this.applicantURL + `delete/${id}`);
   }*/
}

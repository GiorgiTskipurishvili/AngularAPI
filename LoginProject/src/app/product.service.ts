import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7020/api/Employees'; // Update with your API URL

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new employee
  saveEmployee(employee:any): Observable<any>{
    return this.http.post<any>(this.apiUrl, employee);
  }

  // Delete an employee by ID
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


}

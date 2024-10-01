import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  employees: any[] = [];
  newEmployee={
    first_Name: '',
    last_Name: '',
    position: ''
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.productService.getEmployees().subscribe((data) => {
      this.employees = data.map(employee => ({
        ...employee,
        imageUrl: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' // Default avatar
      }));
    });
  }

  saveEmployee(): void {
    if (this.newEmployee.first_Name && this.newEmployee.last_Name && this.newEmployee.position) {
      this.productService.saveEmployee(this.newEmployee).subscribe((employee) => {
        this.employees.push(employee); 
        this.newEmployee = { first_Name: '', last_Name: '', position: '' }; 
      });
    } else {
      alert('Please fill in all fields');
    }
  }

  deleteEmployee(id: number) {
    this.productService.deleteEmployee(id).subscribe(() => {
      this.getEmployees();
    });
  }
}

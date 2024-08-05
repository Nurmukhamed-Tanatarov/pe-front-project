import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/services/test-service'; // Убедитесь, что путь правильный
import { UserModel } from 'app/models/user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  standalone: true
})
export class TestComponent implements OnInit {
  responseData: any; // Переменная для хранения данных ответа
  error: string | null = null; // Переменная для хранения ошибок

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    // Можно вызвать методы сервиса при инициализации компонента
    this.getData();
  }

  testPost(): void {
    
    const testUser: UserModel = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
      role: 'user'
  };

    this.testService.testPost(testUser).subscribe(
      response => {
        console.log('Post response:', response);
        this.responseData = response;
      },
      error => {
        console.error('Post error:', error);
        this.error = 'An error occurred while posting data.';
      }
    );
  }

  getData(): void {
    this.testService.testGet().subscribe(
      response => {
        console.log('Get response:', response);
        this.responseData = response;
      },
      error => {
        console.error('Get error:', error);
        this.error = 'An error occurred while fetching data.';
      }
    );
  }
}

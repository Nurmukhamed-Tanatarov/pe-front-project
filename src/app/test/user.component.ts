import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user-service'; // Ensure path is correct
import { UserModel } from 'app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true
})
export class UserComponent implements OnInit {
  responseData: any; // Variable for response data
  error: string | null = null; // Variable for errors
  userId: number | null = 7; // Initialize with a default value

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Optionally call methods on component initialization
    this.getAllUsers();
    if (this.userId !== null) {
      this.getUserByID(this.userId);
    }
  }

  createUser(): void {
    const testUser: UserModel = {
      email: 'test5@example.com',
      password: 'password123',
      name: 'Test User',
      role: 'user'
    };

    this.userService.createUser(testUser).subscribe(
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

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
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

  getUserByID(id: number): void {
    this.userService.getUserByID(id).subscribe(
      response => {
        console.log('getUserByID:', response);
        this.responseData = response;
      },
      error => {
        console.error('Get error:', error);
        this.error = 'An error occurred while fetching the user.';
      }
    );
  }

  updateUser(id: number): void {
    const updatedUser: UserModel = {
      email: 'alreadynotTEST@example.com',
      password: 'qwerty',
      name: 'HELLO',
      role: 'ADMIN'
    };

    this.userService.updateUser(updatedUser, id).subscribe(
      response => {
        console.log('User updated successfully', response);
        this.responseData = response; // Optionally update responseData
      },
      error => {
        console.error('Error updating user', error);
        this.error = 'An error occurred while updating the user.';
      }
    );
  }
}

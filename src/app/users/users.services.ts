import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction, User } from './interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UsersService {

    private baseUrl = 'http://192.168.20.17:3001';
    private balanceUrl = 'http://192.168.20.17:3003';

    constructor(private http: HttpClient) { }

    getUsers(): Observable <User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/users`);
    }
    
    getUser(id: string): Observable <User> {
        return this.http.get<User>(`${this.baseUrl}/users/${id}`);
    }
    
    getBalanceByUserId(id: string): Observable <any> {
        return this.http.get(`${this.balanceUrl}/balance/by-user/${id}`);
    }
    
    loadMoney(body: Transaction): Observable <any> {
        return this.http.post(`${this.balanceUrl}/transaction/load-money`, body);
    }
    
    buyCoins(body: Transaction): Observable <any> {
        return this.http.post(`${this.balanceUrl}/transaction/buy-coins`, body);
    }
    
}
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.services';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Transaction, User } from '../../interfaces/user.interface';

@Component({
  selector: 'users-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss']
})
export class GetUserComponent implements OnInit {
  
  public user?: User;

  public buyCoinsVisible = false;
  public loadMoneyVisible = false;
  public loadMoneyValue = 0;
  public buyCoinsValue = 0;

  brandData: any[] = [];

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
   
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.usersService.getUser( id )),
      )
      .subscribe( user => {
        
        if ( !user ) return this.router.navigate([ '/users/list' ]);

        this.user = user;

        this.usersService.getBalanceByUserId(user.id)
        .subscribe(balance => {
          this.brandData = [];
          const dataBalance = {
            icon: 'cibFacebook',
            values: [{ title: 'Money', value: balance['money'] }, { title: 'Coins', value: balance['coins'] }],
            capBg: { '--cui-card-cap-bg': '#3b5998' },
          }
          this.brandData.push(dataBalance);
          
        });

        return;
      })
  }

  toggleBuyCoins() {
    this.buyCoinsVisible = !this.buyCoinsVisible;
  }

  handleBuyCoinsChange(event: boolean) {
    this.buyCoinsVisible = event;
  }

  toggleLoadMoney() {
    this.loadMoneyVisible = !this.loadMoneyVisible;
  }

  handleLoadMoneyChange(event: boolean) {
    this.loadMoneyVisible = event;
  }

  loadMoney() {
    this.loadMoneyVisible = !this.loadMoneyVisible;
    
    const transaction: Transaction = {
      isAdding: true,
      typeTransaction: 'load',
      value: this.loadMoneyValue,
      userId: this.user!.id,
      receiptPayment: new Date().getTime().toString()
    }
    
    this.usersService.loadMoney(transaction)
      .subscribe(d => {
        window.location.reload();
      });

  }
  
  buyCoins() {
    console.log(this.buyCoinsValue);
    this.buyCoinsVisible = !this.buyCoinsVisible;

    const transaction: Transaction = {
      isAdding: true,
      typeTransaction: 'buy',
      value: this.buyCoinsValue,
      userId: this.user!.id,
      receiptPayment: new Date().getTime().toString()
    }
    
    this.usersService.buyCoins(transaction)
    .subscribe(d => {
      window.location.reload();
    });
  }
}

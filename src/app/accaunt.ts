import { Injectable } from '@angular/core';

export interface Accaunts {
  ID : number
  FirstName : string
  LastName : string 
  BirthDay : string
  Status : string
  Password : string
}

@Injectable({
  providedIn: 'root',
})
export class Accaunt {
  public acc : Accaunts[] = [
    {
      ID : 1,
      FirstName: "Alex",
      LastName: "test",
      BirthDay: "10-10-2000",
      Status: "active",
      Password: "1234"
    },
    {
      ID : 2,
      FirstName: "Test",
      LastName: "test2",
      BirthDay: "10-10-2020",
      Status: "active",
      Password: "1111"
    }
  ]

  getAccountByName(firstName: string): Accaunts | undefined {
    return this.acc.find(ac => ac.FirstName === firstName);
  }

  public getPassVer(login: string, pass: string): boolean {
    const accaount = this.getAccountByName(login);
    if (!accaount) return false;
    return accaount.Password === pass;
  }
}

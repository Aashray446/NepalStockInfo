import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShareDetails } from '../interfaces/share-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchDetailsService {
  deleteFavourateStock(id: any) {
    throw new Error('Method not implemented.');
  }

shareDetails:ShareDetails[] = [];
  private webServerAddress = 'http://localhost:3001/api/v1';

  constructor(private _http:HttpClient) { }

  async updateShareDetails():Promise<ShareDetails[]>{ {
    return new Promise((resolve, reject) => {
      this._http.get<ShareDetails[]>(this.webServerAddress + '/shareDetails').subscribe((data:any) => {
        this.shareDetails = data.models as ShareDetails[];
        resolve(this.shareDetails);
      });
    });
  }
}

  getShareName(name:string): Observable<ShareDetails[]> {
    this.updateShareDetails();
    return of(this.shareDetails.filter( (share) => {
      if(share.company.toLowerCase().indexOf(name.toLowerCase()) > -1){
        return true;
      }
      return false;
    }));
  }

  getShareDetails(stockName: String):ShareDetails {
    this.updateShareDetails();
    let details = this.shareDetails.find( share => share.company === stockName);

    if(!details){
      return this.shareDetails[0];
    }
    return details;

  }

  getShareDetailsByCategory(category: String):ShareDetails[] {
    this.updateShareDetails();
    return this.shareDetails.filter( share => share.category === category);

  }

  getFavourateStock():Promise<ShareDetails[]> {
    return new Promise((resolve, reject) => {
      this._http.get<ShareDetails[]>(this.webServerAddress + '/private/fav').subscribe((data:any) => {
        resolve(data.model as ShareDetails[]);
      });
    });
  }

  addFavourateStock(id:any):Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._http.post( this.webServerAddress + '/private/fav', {
        shareDetailId : id
      }).subscribe(
        {
          next: (response:any) => {
            resolve(true);
          },
          error: (error) => {
            reject(error.error.msg);
          }
        }
      );
    });
  }


  removeFavourateStock(id:any):Promise<boolean> {
    return new Promise((resolve, reject) => {
      this._http.post( this.webServerAddress + '/private/fav/delete',{
        id : id
      }).subscribe(
        {
          next: (response:any) => {
            resolve(true);
          },
          error: (error) => {
            reject(error.error.msg);
          }
        }
      );
    });
  }


}

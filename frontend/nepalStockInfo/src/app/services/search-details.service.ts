import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShareDetails } from '../interfaces/share-details';

@Injectable({
  providedIn: 'root'
})
export class SearchDetailsService {

  public shareDetails: ShareDetails[] = [
    {
      imgUrl : "assets/images/upperhewakhola.jpg",
      category : "HydroPower",
      company : "Upper Hewa Khola Hydropower Limited",
      description: "Upper Hewa Khola Small Hydropower project is a run-of-river type of project located in Sankhuwasava district at Siddhapokhai and Jaljala VDCs between longitudes 87o20’45” to 87o22’30” and latitudes 27o19’34” to 27o20’55”, just upstream of existing & operational Hewa Khola Small Hydropower Project, 4.5MW which is completed by Barun Hydropower Company Ltd. The same developers are going to construct this project with an installed capacity of 8.5 MW with 236.2 m net head and 4.2 m3/sec design discharge at Q40%. The catchment area is 66km2 including two collection streams Jhutre and Khakuwa Khola.",
      eps : 0,
      peRatio: 0,
      paidUpCapital: 0,
      bookValue: 0,
      marketCap: 0,
      dividenHistory: [
        {
          year: 0,
          cash: 0,
          bonus: 0,
          total: 0,
        }
      ],
    },
    {
      imgUrl : "assets/images/barun.png",
      category : "HydroPower",
      company : "Barun Hydropower Company Limited ",
      description: "bhdhdsbjs",
      eps : 1.33,
      peRatio: 349.7,
      paidUpCapital: 535815000.00,
      bookValue: 	103.07,
      marketCap: 1243090800.00,
      dividenHistory: [
        {
          year: 2076/77,
          cash: 0.26,
          bonus: 5,
          total: 5.26,
        }
      ],
    },
    {
      imgUrl : "assets/images/api.jfif",
      category : "HydroPower",
      company : "Api Power Company Limited",
      description: "bfndgbmfgf",
      eps : 3.67,
      peRatio: 59.5,
      paidUpCapital: 3844874307.50,
      bookValue: 	107.72,
      marketCap: 8389515738.97,
      dividenHistory: [
        {
          year: 2077/2078,
          cash: 0.55,
          bonus: 10.5,
          total: 11.05,
        }
      ],
    },
    {
      imgUrl : "assets/images/nicasia.jpg",
      category : "Bank",
      company : "NIC ASIA BANK LIMITED",
      description: "gnfsngfb",
      eps : 40.84,
      peRatio: 15.8,
      paidUpCapital: 11564005.37,
      bookValue: 189.90,
      marketCap: 71361477113.09,
      dividenHistory: [
        {
          year: 2076/2077,
          cash: 1,
          bonus: 19,
          total: 20,
        }
      ],
    },
    {
      imgUrl : "assets/images/nabil.jpg",
      category : "Bank",
      company : "Nabil Bank Limited",
      description: "jfngfdng",
      eps : 21.78,
      peRatio: 35.1,
      paidUpCapital: 22832909000,
      bookValue: 230.30,
      marketCap: 174443424760.00,
      dividenHistory: [
        {
          year: 2077/2078,
          cash: 4.4,
          bonus: 33.6,
          total: 38,
        }
      ],
    },
    {
      imgUrl : "assets/images/prabhu.jpg",
      category : "Bank",
      company : "Prabhu BANK LIMITED",
      description: "gnfsngfb",
      eps : 20.46,
      peRatio: 9.7,
      paidUpCapital: 12708704624.00,
      bookValue: 156.16,
      marketCap: 25188652564.77,
      dividenHistory: [
        {
          year: 2077/2078,
          cash: 0.63,
          bonus: 12,
          total: 12.63,
        }
      ],
    },
  ]

  constructor() { }

  getShareName(name:string): Observable<ShareDetails[]> {
    return of(this.shareDetails.filter( (share) => {
      if(share.company.toLowerCase().indexOf(name.toLowerCase()) > -1){
        return true;
      }
      return false;
    }));
  }

  getShareDetails(stockName: String):ShareDetails {
    let details = this.shareDetails.find( share => share.company === stockName);

    if(!details){
      return this.shareDetails[0];
    }
    return details;

  }

  getShareDetailsByCategory(category: String):ShareDetails[] {
    return this.shareDetails.filter( share => share.category === category);
  }

}

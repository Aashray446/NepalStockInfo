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
      imgUrl : "assets/images/upperhewakhola.jpg",
      category : "HydroPower",
      company : "Lower Hewa Khola Hydropower Limited",
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
      imgUrl : "assets/images/upperhewakhola.jpg",
      category : "Bank",
      company : "NIC ASIA BANK LIMITED",
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
      imgUrl : "assets/images/upperhewakhola.jpg",
      category : "Bank",
      company : "Nabil Bank Limited",
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
    }
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

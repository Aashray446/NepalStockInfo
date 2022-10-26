import { Injectable } from '@angular/core';
import { ShareDetails } from '../interfaces/share-details';
import { SearchDetailsService } from './search-details.service';

@Injectable({
  providedIn: 'root'
})
export class ShareDetailsService {

  constructor(private search:SearchDetailsService) { }


  getShareDetailsByName(name:String):any{
    return this.search.getShareDetails(name)
  }


}

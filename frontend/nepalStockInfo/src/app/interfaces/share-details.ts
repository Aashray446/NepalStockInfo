export interface ShareDetails {
  imgUrl : string;
  category : string;
  company : string;
  description : string;
  eps : number;
  peRation: number;
  paidUpCapital: number;
  bookValue: number;
  marketCap: number;
  dividenHistory: [
    {
      year: number;
      cash: number;
      bonus: number;
      total: number;
    }
  ];
}

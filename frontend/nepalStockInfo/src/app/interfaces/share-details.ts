export interface ShareDetails {
  imgUrl : string;
  category : string;
  company : string;
  description : string;
  eps : number;
  peRatio: number;
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

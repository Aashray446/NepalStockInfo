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
  ltd: number;
  dividenHistory: [
    {
      year: number;
      cash: number;
      bonus: number;
      total: number;
    }
  ];
}

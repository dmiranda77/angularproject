export interface AntiHero {
    firstName: string;
    lastName: string;
    knownAs: string;
    address: {
      bldgNo: number;
      street: string;
      city: string;
      country: string;
    };
    powers: [];
  }
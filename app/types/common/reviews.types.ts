export type ReviewListType = {
  data: {
    teamId: number;
    id: number;
    score: number;
    comment: string;
    createdAt: string;
    Gathering: {
      teamId: number;
      id: number;
      type: string;
      name: string;
      dateTime: string;
      location: string;
      image: string;
    };
    User: {
      teamId: number;
      id: number;
      name: string;
      image: string;
    };
  }[];
  totalItemCount: number;
  currentPage: number;
  totalPages: number;
};

export type ReviewType = {
  gatheringImg: string;
  score: number;
  comment: string;
  gatheringType: string;
  gatheringLocation: string;
  userImg: string;
  userName: string;
  createdAt: string;
  pageName?: 'mypage' | 'gatherings';
};

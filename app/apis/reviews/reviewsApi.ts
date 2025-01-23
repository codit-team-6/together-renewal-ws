import {GatheringWithoutAll} from '../../types/common/gatheringFilter.types';
import {ReviewListType} from '../../types/common/reviews.types';
import {CodeitError} from '../../types/error.types';
import {AverageScore} from '../../types/reviews/averageScores.types';
import {
  GetGatheringReviewsProps,
  GetMyReviewsProps,
  GetReviewsProps,
} from '../../types/reviews/reviewsApi.types';
import {buildQueryParams} from '../../utils/apiFilterUrlUtil';
import {clientInstance} from '../client';

export const getReviews = async (props: GetReviewsProps): Promise<ReviewListType> => {
  const queryParams = buildQueryParams({
    type: props.gatheringType,
    location: props.location,
    date: props.date,
    sortBy: props.sortBy,
    sortOrder: props.sortOrder,
  });
  try {
    const response = await clientInstance.get<ReviewListType>({
      path: `/route/reviews?${queryParams.toString()}`,
    });
    return response;
  } catch (error) {
    if (error instanceof CodeitError) {
      console.log('현재 error 객체', error.code);
      return {
        data: [],
        totalItemCount: 0,
        currentPage: 0,
        totalPages: 0,
      };
    }
    return {
      data: [],
      totalItemCount: 0,
      currentPage: 0,
      totalPages: 0,
    };
  }
};

// 마이페이지-나의 리뷰는 userId를 보내야함.
export const getMyReviews = async (props: GetMyReviewsProps): Promise<ReviewListType> => {
  const queryParams = buildQueryParams({
    userId: props.userId,
    sortOrder: props.sortOrder,
  });

  try {
    const response = await clientInstance.get<ReviewListType>({
      path: `/route/reviews?${queryParams.toString()}`,
    });
    return response;
  } catch (error) {
    if (error instanceof CodeitError) {
      console.log('현재 error 객체', error.code);
      return {
        data: [],
        totalItemCount: 0,
        currentPage: 0,
        totalPages: 0,
      };
    }
    return {
      data: [],
      totalItemCount: 0,
      currentPage: 0,
      totalPages: 0,
    };
  }
};

// 모임 상세 페에지는 gatheringId를 보내야함.
export const getGatheringReviews = async (
  props: GetGatheringReviewsProps,
): Promise<ReviewListType> => {
  const queryParams = buildQueryParams({
    gatheringId: props.gatheringId,
    sortOrder: props.sortOrder,
  });

  try {
    const response = await clientInstance.get<ReviewListType>({
      path: `/route/reviews?${queryParams.toString()}`,
    });
    return response;
  } catch (error) {
    if (error instanceof CodeitError) {
      console.log('현재 error 객체', error.code);
      return {
        data: [],
        totalItemCount: 0,
        currentPage: 0,
        totalPages: 0,
      };
    }
    return {
      data: [],
      totalItemCount: 0,
      currentPage: 0,
      totalPages: 0,
    };
  }
};

export const getReviewsScore = async (
  gatheringType: GatheringWithoutAll,
): Promise<AverageScore> => {
  const queryParams = new URLSearchParams();
  if (gatheringType) queryParams.append('type', gatheringType);

  try {
    const response = await clientInstance.get<AverageScore>({
      path: `/route/reviews/scores?${queryParams.toString()}`,
    });
    return response;
  } catch (error) {
    if (error instanceof CodeitError) {
      console.log('현재 error 객체', error.code);
      return {
        teamId: '',
        type: '',
        oneStar: 0,
        twoStars: 0,
        threeStars: 0,
        fourStars: 0,
        fiveStars: 0,
        averageScore: 0,
      };
    }
    return {
      teamId: '',
      type: '',
      oneStar: 0,
      twoStars: 0,
      threeStars: 0,
      fourStars: 0,
      fiveStars: 0,
      averageScore: 0,
    };
  }
};

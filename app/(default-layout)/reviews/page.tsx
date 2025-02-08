/* eslint-disable no-nested-ternary */

'use client';

import {useQuery} from '@tanstack/react-query';

import {getReviewsScore} from '../../apis/reviews/reviewsApi';
import {GatheringFilter} from '../../components/common/gatheringFilter/gatheringFilter';
import {PageInfo} from '../../components/common/pageInfo';
import ReviewWrapper from '../../components/common/review/reviewWrapper';
import {AverageScores} from '../../components/reviews/averageScores';
import {useQueryStringFilter} from '../../hooks/useQueryStringFilter';
import {reviewListQuery} from '../../queries/common/queryKeys';
import {GatheringWithoutAll} from '../../types/common/gatheringFilter.types';
import {AverageScore} from '../../types/reviews/averageScores.types';

export default function ReviewsPage() {
  const {filter, setFilter, updateQueryString} = useQueryStringFilter();

  const {data: reviewList} = useQuery(reviewListQuery.getReviewList(filter));

  // 두 번째 쿼리: 리뷰 점수 가져오기
  const {type} = filter;
  const {data: scoreData} = useQuery<AverageScore>({
    queryKey: ['reviewScores', type],
    queryFn: () => getReviewsScore(type as GatheringWithoutAll),
  });

  return (
    <div>
      <div>
        <p>Category: {filter.type}</p>
        <p>location: {filter.location}</p>
        <p>date: {filter.date}</p>
        <p>sortBy: {filter.sortBy}</p>
        <p>sortOrder: {filter.sortOrder}</p>
      </div>
      <div className="mb-6 tablet:mb-8">
        <PageInfo pageName="reviews" />
      </div>
      <div className="border-b-2 border-b-gray-200 pb-4">
        <GatheringFilter
          updateQueryString={updateQueryString}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <div className="mt-6">{scoreData && <AverageScores {...scoreData} />}</div>

      <div className="mt-4 flex flex-col justify-between gap-6 tablet:mt-6">
        {reviewList && <ReviewWrapper {...reviewList} />}
      </div>
    </div>
  );
}

// {reviewList?.data.map(review => (
//   <Review
//     key={review.id}
//     gatheringImg={review.Gathering.image}
//     score={review.score}
//     comment={review.comment}
//     gatheringType={review.Gathering.type}
//     gatheringLocation={review.Gathering.location}
//     userImg={review.User.image}
//     userName={review.User.name}
//     createdAt={review.createdAt}
//   />
// ))}

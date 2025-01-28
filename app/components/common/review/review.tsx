import Image from 'next/image';

import {ReviewType} from '../../../types/common/reviews.types';

import {ReviewScore} from './reviewScore';

// 마이페이지-나의 리뷰는 pageName = "my-page"를 보내야함.
// 모임 상세 페에지는 pageName = "gatherings"을 보내야함.

export function Review({
  gatheringImg,
  score,
  comment,
  gatheringType,
  gatheringLocation,
  userImg,
  userName,
  createdAt,
  pageName,
}: ReviewType) {
  const createDate: string = createdAt.slice(0, 10).replaceAll('-', '.');

  return (
    <div
      className={`grid w-[311px] grid-rows-1 tablet:w-full ${pageName === 'gatherings' ? 'tablet:grid-cols-1' : 'tablet:grid-cols-[280px_minmax(0,_1fr)]'} box-border gap-6`}
    >
      {pageName !== 'gatherings' &&
        (!gatheringImg ? (
          <div className="h-[156px] w-[311px] rounded-3xl bg-neutral-800 tablet:w-[280px]" />
        ) : (
          <div className="relative h-[156px] w-[311px] overflow-hidden rounded-3xl tablet:w-[280px]">
            <Image
              src={gatheringImg}
              alt="모임 이미지"
              fill
              sizes="(max-width: 768px) 311px, 280px"
              className="object-cover"
            />
          </div>
        ))}
      <div className="flex flex-col border-b-2 border-dashed border-gray-200 pb-5 tablet:px-0">
        <ReviewScore score={score} />
        <p className="pt-2.5 text-sm">{comment}</p>
        {pageName === 'gatherings' ? (
          ''
        ) : (
          <div className="pt-2.5 text-sm">{`${gatheringType} · ${gatheringLocation}`}</div>
        )}
        <div className="flex items-center pt-2 text-sm">
          {pageName === 'my-page' ? (
            ''
          ) : (
            <div className="flex items-center">
              {!userImg ? (
                <Image
                  src="/icons/profile-default.svg"
                  alt="기본 프로필 이미지"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src={userImg}
                  alt="프로필 이미지"
                  width={24}
                  height={24}
                  className="size-6 rounded-full"
                />
              )}
              <span className="pl-2">{userName}</span>
            </div>
          )}
          {pageName === 'my-page' ? '' : <div className="pl-2 pr-3">|</div>}
          <div className="text-gray-500">{createDate}</div>
        </div>
      </div>
    </div>
  );
}

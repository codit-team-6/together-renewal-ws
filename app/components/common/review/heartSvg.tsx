'use client';

import {useState} from 'react';

import {motion} from 'motion/react';

export function HeartSVG({percentage}: {percentage: number}) {
  const [clipPathId] = useState(`heartClip-${Math.random()}`); // 고유한 ID 생성

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        {/* clipPath을 이용해서 애니메이션 적용 */}
        <clipPath id={clipPathId}>
          <motion.rect
            initial={{width: '0%'}}
            animate={{width: `${percentage}%`}}
            transition={{duration: 0.5, ease: 'easeOut'}}
            x="0"
            y="0"
            height="100%"
          />
        </clipPath>
      </defs>

      {/* 기본 빈 하트 */}
      <path
        d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z"
        fill="#E5E7EB"
      />

      {/* 채워질 하트 (clipPath 적용) */}
      <path
        d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z"
        fill="#EA580C"
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  );
}

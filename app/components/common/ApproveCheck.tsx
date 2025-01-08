/** 5인 이상 개설 확정 */
export function ApproveCheck(participantCount: number): React.ReactNode {
  if (participantCount >= 5) {
    return (
      <div className="text-orange-500 font-medium ml-3 flex items-center">
        <img className="w-[24px] h-[24px]" src="/orangeCheckIcon.svg" alt="확정 아이콘" />
        <p className="mt-1">개설확정</p>
      </div>
    );
  }
  return null;
}

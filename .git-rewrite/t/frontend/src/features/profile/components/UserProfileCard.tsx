import useProfileData from "../hooks/useProfileData"

const UserProfileCard = () => {
  const { data: profile, isLoading, error } = useProfileData()

  if (isLoading) return <div>로딩 중...</div>
  if (error) return <div>에러가 발생했습니다: {error.message}</div>
  if (!profile) return <div>프로필 정보가 없습니다.</div>

  return (
    <div className="flex items-center gap-4 bg-em-white">
      <img
        src={profile.profileImageUrl || "https://cataas.com/cat"}
        alt="프로필 사진"
        className="w-12 h-12 bg-gray-300 rounded-full"
      />
      <div className="flex flex-col justify-center gap-1">
        {profile.socialId ? (
          <>
            <h2 className="text-xl font-bold text-em-black">{profile.username}</h2>
            <div className="flex items-center gap-1">
              {profile.providerImage && (
                <img src={profile.providerImage} alt="소셜 아이콘" className="w-4 h-4" />
              )}
              {profile.socialId && (
                <p className="text-xs font-semibold text-em-black">{profile.socialId}</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-500">프로필 정보가 없습니다.</p>
        )}
      </div>
    </div>
  )
}

export default UserProfileCard

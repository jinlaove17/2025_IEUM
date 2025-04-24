import EmDrawer from "@/components/drawer/EmDrawer"
import Tabs from "@/components/Tabs/Tabs"
import AddressDisplay from "@/features/map/components/AddressDisplay"
import MapViewer from "@/features/map/components/MapViewer"
import PostList from "@/features/post/components/PostList"
import useDrawer from "@/hooks/useDrawer"
import useGps from "@/hooks/useGps"
import { LocateFixedIcon, MailSearch, RotateCwIcon, SendIcon } from "lucide-react"
import { useState } from "react"

const HomePage = () => {
  const tabs = [
    { value: "posts", label: "이곳에 남긴 글" },
    { value: "playlist", label: "이곳의 플레이리스트" },
  ]

  const dummyData = [
    {
      id: 1,
      location: "서울 강남구 테헤란로 212",
      lat: 37.5031847,
      lng: 127.0392911,
      date: "5분 전",
      author: "걱정하는 강아지",
      content:
        "오늘 SSAFY 14기 면접 보러가는데 엄청 떨려요.\n잘 할 수 있겠죠ㅠㅠ?\n면접 보시는 분들 14기 돼서 꼭 만나요.",
      emoji: { happy: 1, sad: 20, love: 213, angry: 2, confident: 234 },
    },
    {
      id: 2,
      location: "서울 강남구 테헤란로 213",
      lat: 37.5010261,
      lng: 127.0345959,
      date: "13분 전",
      author: "울먹이는 바다코끼리",
      content: "ㅠㅠ",
      emoji: { happy: 1, sad: 20, love: 213, angry: 2, confident: 234 },
    },
    {
      id: 3,
      location: "서울 강남구 테헤란로 214",
      lat: 37.4932619,
      lng: 127.0322652,
      date: "1시간 전",
      author: "기뻐하는 판다곰",
      content: "우와아아아아아아아아아아~!",
      emoji: { happy: 1, sad: 20, love: 213, angry: 2, confident: 234 },
    },
  ]

  const { isDenied, currentPosition, lastFetchedPosition } = useGps()
  const { isOpen, setIsOpen } = useDrawer("home")
  const [currentTab, setCurrentTab] = useState<"posts" | "playlist">("posts")

  const renderTabContent = () => {
    switch (currentTab) {
      case "posts":
        return <PostList list={dummyData} />
      default:
        return <div className="h-[600px]"></div>
    }
  }

  return (
    <div className="relative h-[calc(100vh-7.5rem)]">
      <AddressDisplay lastFetchedPosition={lastFetchedPosition} />

      <button className="absolute z-10 flex items-center gap-2 px-3 py-2 -translate-x-1/2 bg-white border rounded-lg shadow-md cursor-pointer top-12 left-1/2 border-neutral-200">
        <RotateCwIcon className="size-5" />
        <p className="text-sm font-semibold">메시지 재탐색</p>
      </button>

      <MapViewer
        className="relative h-full"
        isDenied={isDenied}
        location={currentPosition}
        posts={dummyData}>
        {(focusOnMarker) => (
          <button
            className="absolute z-10 p-2 bg-white border rounded-full shadow-md cursor-pointer bottom-24 right-4 border-neutral-200"
            onClick={focusOnMarker}>
            <LocateFixedIcon />
          </button>
        )}
      </MapViewer>

      <button className="absolute z-10 p-2 bg-white border rounded-full shadow-md cursor-pointer bottom-8 right-4 border-neutral-200">
        <SendIcon />
      </button>

      <EmDrawer
        open={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
        trigger={
          <div className="absolute z-10 flex items-center gap-2 px-3 py-2 -translate-x-1/2 bg-white border rounded-lg shadow-md cursor-pointer bottom-8 left-1/2 border-neutral-200">
            <MailSearch className="size-5" />
            <p className="text-sm font-semibold">메세지 전체 보기</p>
          </div>
        }>
        <div>
          <Tabs
            tabs={tabs}
            activeTab={currentTab}
            onTabChange={(tabValue: string) => setCurrentTab(tabValue as "posts" | "playlist")}
          />
          {renderTabContent()}
        </div>
      </EmDrawer>
    </div>
  )
}

export default HomePage

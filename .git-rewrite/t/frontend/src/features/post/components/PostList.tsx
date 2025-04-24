import { Post } from "../types/post"
import PostItem from "./PostItem"
import SortTypeSelector from "./SortTypeSelector"

interface PostListProp {
  list: Post[]
}

const PostList = ({ list }: PostListProp) => {
  const sortTypeData = [
    { label: "최신순", sortType: "latest" },
    { label: "거리순", sortType: "distance" },
    { label: "공감순", sortType: "like" },
  ]

  return (
    <div className="h-[600px] overflow-y-auto">
      <SortTypeSelector contents={sortTypeData} />
      <div className="flex flex-col gap-4 bg-em-gray-sm">
        {list.map((item) => (
          <PostItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default PostList

import { Stack, StackProps } from '@/components'
import { PostPreviewData, PostPreviewLink } from '@/features/posts'

interface PostListingProps extends StackProps {
  posts: PostPreviewData[]
}

export function PostListing({ posts, ...props }: PostListingProps) {
  return (
    <Stack {...props}>
      {posts.map((post) => (
        <PostPreviewLink key={post.id} post={post} />
      ))}
    </Stack>
  )
}

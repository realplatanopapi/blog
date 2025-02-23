import { LinkBox, LinkBoxProps, LinkOverlay, Stack, Text } from '@/components'
import { PostPreviewData } from '@/features/posts/types/post-preview-data'

interface PostPreviewLinkProps extends LinkBoxProps {
  post: PostPreviewData
}

export function PostPreviewLink({ post, ...props }: PostPreviewLinkProps) {
  return (
    <LinkBox {...props}>
      <Stack>
        <LinkOverlay
          href={{
            pathname: `/${post.slug}`,
          }}
        >
          <Text fontSize="xl">{post.title}</Text>
        </LinkOverlay>
        {post.subtitle && <Text color="fg.subtle">{post.subtitle}</Text>}
      </Stack>
    </LinkBox>
  )
}

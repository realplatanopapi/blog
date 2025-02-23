import { LinkBox, LinkBoxProps, LinkOverlay, Stack, Text } from '@/components'
import { PostPreviewData } from '@/features/posts/types/post-preview-data'

interface PostPreviewLinkProps extends LinkBoxProps {
  post: PostPreviewData
}

export function PostPreviewLink({ post, ...props }: PostPreviewLinkProps) {
  return (
    <LinkBox className="group" {...props}>
      <Stack>
        <LinkOverlay
          href={{
            pathname: `/p/${post.slug}`,
          }}
        >
          <Text
            fontSize="xl"
            fontWeight="semibold"
            _groupHover={{
              color: 'brand.cocoGreen',
              textDecoration: 'underline',
            }}
          >
            {post.title}
          </Text>
        </LinkOverlay>
        {post.subtitle && <Text color="fg.muted">{post.subtitle}</Text>}
      </Stack>
    </LinkBox>
  )
}

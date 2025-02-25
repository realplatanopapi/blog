import { Heading, LogoIcon, LogoLink, Stack, Text, TextLink } from '@/components'
import { PostPreviewData } from '@/features/posts'
import { PostListing } from '@/features/posts/components/post-listing'

interface LandingViewProps {
  posts: PostPreviewData[]
}

export function LandingView({ posts }: LandingViewProps) {
  return (
    <Stack gap={8}>
      <Stack gap={4}>
        <LogoLink>
          <LogoIcon />
        </LogoLink>
        <Heading fontWeight="bold" textAlign="center" as="h1" size="3xl">
          coquito.io
        </Heading>
      </Stack>
      <Text color="fg.muted" textAlign="center" mx="auto" maxWidth="40ch">
        Posts about the human side of software engineering. By{' '}
        <TextLink href="https://bsky.app/profile/realplatanopapi.net" target="_blank">
          @realplatanopapi
        </TextLink>
        .
      </Text>
      <PostListing gap="inherit" posts={posts} />
    </Stack>
  )
}

import { Heading, LogoIcon, LogoLink, Stack, Text, TextLink } from '@/components'
import { PostPreviewLink } from '@/features/posts/components'
import { dbClient } from '@/lib/db'

export default async function Home() {
  const posts = await dbClient.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

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
      <Text color="fg.muted" fontSize="lg" textAlign="center" mx="auto" maxWidth="30ch">
        Posts about the human side of software engineering. By{' '}
        <TextLink href="https://bsky.app/profile/realplatanopapi.net" target="_blank">
          @realplatanopapi
        </TextLink>
        .
      </Text>
      <Stack borderTopWidth={1} borderColor="bg.subtle" pt={6} gap="inherit">
        {posts.map((post) => (
          <PostPreviewLink key={post.id} post={post} />
        ))}
      </Stack>
    </Stack>
  )
}

export const dynamic = 'force-dynamic'

import { Heading, LogoIcon, LogoLink, Stack, Text } from '@/components'
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
        <Heading textAlign="center" as="h1" size="3xl">
          Coquito.io
        </Heading>
      </Stack>
      <Text fontSize="lg" textAlign="justify">
        Posts about the human side of software engineering. And also, Python and TypeScript.
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

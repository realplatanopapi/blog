import { Heading, LogoIcon, LogoLink, Stack, Text, TextLink } from '@/components'
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
    <Stack gap={4}>
      <LogoLink>
        <LogoIcon />
      </LogoLink>
      <Heading textAlign="center" as="h1" size="3xl">
        Coquito.io
      </Heading>
      <div>
        {posts.map((post) => (
          <Text key={post.id}>
            <TextLink
              href={{
                pathname: `/p/${post.slug}`,
              }}
            >
              {post.title}
            </TextLink>
            <Text as="span" fontSize="sm" color="gray.500">
              {post.createdAt.toLocaleDateString()}
            </Text>
          </Text>
        ))}
      </div>
    </Stack>
  )
}

export const dynamic = 'force-dynamic'

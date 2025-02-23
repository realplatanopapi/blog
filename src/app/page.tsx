import { Heading, Text, TextLink } from '@/components'
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
    <main>
      <Heading as="h1" size="2xl">
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
    </main>
  )
}

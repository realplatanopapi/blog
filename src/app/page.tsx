import { TextLink } from "@/components";

export default function Home() {
  return (
    <main>
      <TextLink
        href={{
          pathname: "/p/hello-world",
        }}
      >
        Hello world!
      </TextLink>
    </main>
  );
}

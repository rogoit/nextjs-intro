import { getBlogTeaserList } from "../shared/api/backend-queries";

export default async function BlogOverview() {
  const teaserList = await getBlogTeaserList();
  return (
    <div>
      <h1>Blog Overview</h1>
      <ul>
        {teaserList.posts.map((teaser) => (
          <li key={teaser.id}>
            <a href={`/blog/${teaser.id}`}>{teaser.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

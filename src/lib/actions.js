export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

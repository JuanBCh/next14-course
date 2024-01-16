export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 }, //1hr
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getOnePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export const getAuthor = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

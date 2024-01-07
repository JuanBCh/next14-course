import PostCard from "@/ui/postCard/postcard";

export default function BlogPage() {
  const cards = [
    {
      title: "Travel",
      description: "Two weeks in the south of Spain",
      hrefImg:
        "https://images.pexels.com/photos/16794803/pexels-photo-16794803/free-photo-of-rocas-muelle-fachada-litoral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "25.05.2021",
      hrefMore:
        "https://www.pexels.com/es-es/foto/rocas-muelle-fachada-litoral-16794803/",
    },
    { title: "", description: "", hrefImg: "", date: "", hrefMore: "" },
    { title: "", description: "", hrefImg: "", date: "", hrefMore: "" },
    { title: "", description: "", hrefImg: "", date: "", hrefMore: "" },
  ];

  return (
    <div className="w-full flex justify-between flex-wrap">
      {cards.map((card) => (
        <PostCard post={card} />
      ))}
    </div>
  );
}

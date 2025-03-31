import BlogCard from "../BlogCard";

const blogsArray = [
  {
    id: 1,
    name: "Kristin",
    date: new Date(),
    comments: 453,
    title: "The Power of Consistency in Achieving Your Goals",
    content:
      "Success isn't about massive actions taken once in a while. It's about the small, consistent steps you take every day. Whether in fitness, career, or personal growth, discipline beats motivation every time.",
    image: "/images/unsplash_6MNmDi1hc_Y.png",
  },
  {
    id: 2,
    name: "James",
    date: new Date(),
    comments: 218,
    title: "How to Stay Productive When Working from Home",
    content:
      "Remote work offers flexibility, but staying productive can be challenging. Set a routine, eliminate distractions, and use the Pomodoro technique to stay focused and efficient throughout the day.",
    image: "/images/unsplash_alw-CwGFmwQ.png",
  },
  {
    id: 3,
    name: "Sophia",
    date: new Date(),
    comments: 312,
    title: "The Art of Mindfulness: Being Present in a Busy World",
    content:
      "Mindfulness isn’t just meditation; it’s about being fully engaged in the present moment. From eating mindfully to practicing gratitude, small habits can lead to a more peaceful and fulfilling life.",
    image: "/images/unsplash_FO7JIlwjOtU.png",
  },
  {
    id: 4,
    name: "Daniel",
    date: new Date(),
    comments: 129,
    title: "The Future of Technology: Trends to Watch in 2025",
    content:
      "From AI advancements to the rise of Web3, the tech world is evolving rapidly. Staying updated on trends like automation, blockchain, and quantum computing will keep you ahead in the digital era.",
    image: "/images/unsplash_iZVrfElG1t0.png",
  },
  {
    id: 5,
    name: "Emily",
    date: new Date(),
    comments: 567,
    title: "Why Reading Books Can Change Your Life",
    content:
      "Books open the doors to new perspectives, knowledge, and creativity. Whether it's fiction for relaxation or self-improvement books for growth, reading consistently can transform your mindset.",
    image: "/images/unsplash_6MNmDi1hc_Y.png",
  },
];

const homePageBlogsNumber = 3;
const homePageBlogs = blogsArray.slice(0, homePageBlogsNumber);

const LatestNews = () => {
  return (
    <section className="px-4 md:px-20  w-full max-w-[1400px]  mx-auto my-10 bg-gray-50 p-5 md:p-10">
      <h2 className="text-2xl font-bold text-center mb-3">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 rounded-sm ">
        {homePageBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;

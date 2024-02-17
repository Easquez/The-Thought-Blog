import Image from "next/image";
import Link from "next/link";
import UserWelcome from "./components/UserWelcome";

export default function Home() {
  return (
    <div className="mx-5 my-5">
      <UserWelcome />
      <p className="display-4">Welcome to The Thought Blog!</p>
      Here, we invite you to embark on a journey of exploration and discovery.
      Whether you're here to create, read, update, or even delete, our platform
      is designed to empower you every step of the way. Dive into a world of
      diverse perspectives, insightful musings, and thought-provoking content
      carefully curated to stimulate your mind and spark meaningful
      conversations. <br />
      <br />
      As you navigate through our digital space, you'll find a wealth of
      knowledge, inspiration, and creativity waiting to be uncovered. Whether
      you're seeking guidance, inspiration, or simply a moment of reflection,
      we're here to accompany you on your quest for growth and enlightenment.
      So, welcome aboard! Join our vibrant community of thinkers, dreamers, and
      doers as we embark on a journey of intellectual exploration together.
      Let's write, rewrite, and reshape the narratives of tomorrow, one
      keystroke at a time.
      <p className="display-6 text-center my-5">
        Features to help you create and publish amazing blog posts
      </p>
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Content Optimization</h5>
            <p className="card-text">
              Get instant feedback on your content quality, tone and style...
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Quality...</small>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Flexibility</h5>
            <p className="card-text">
              Easily organize your blog posts by updating them whenever you want
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Suit yourself...</small>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Audience Insights</h5>
            <p className="card-text">
              Understand who's reading your blog posts, where they're coming
              from and what they're interested in
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Feedback...</small>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-success mt-3">
          <Link
            href="/blogs"
            style={{ textDecoration: "none", color: "white" }}
          >
            View Blogs
          </Link>
        </button>
        <div className="mt-3">
          <Image
            src="/blog.png"
            height={150}
            width={150}
            quality={100}
            alt="Blog"
          />
        </div>
      </div>
    </div>
  );
}

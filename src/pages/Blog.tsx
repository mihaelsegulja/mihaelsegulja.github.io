import TypewriterEffect from "../components/TypewriterEffect";

export default function Blog() {
  return (
    <>
      <TypewriterEffect uniqueKey="blog" words={["ls blog"]} />
      <div className="blog-container content-container">
        <p>** Coming Soon **</p>
      </div>
    </>
  );
}

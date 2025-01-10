import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getPostById } from "@/services/postService";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

<<<<<<< HEAD
=======
// export const dynamic = "force-dynamic"

>>>>>>> bdefd6c42f62cc8c4e3dc19a5005b067ccccf4dd
async function EditPostPage({ params: { postId } }) {
  const {
    data: { post },
  } = await getPostById(postId);

<<<<<<< HEAD
  console.log(post);

=======
>>>>>>> bdefd6c42f62cc8c4e3dc19a5005b067ccccf4dd
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPostPage;

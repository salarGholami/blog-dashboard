import Empty from "@/components/ui/Empty";
import Table from "@/components/ui/Table";
import { getAllPostsApi } from "@/services/postService";
import PostRow from "./PostRow";

async function PostsTable() {
  const posts = await getAllPostsApi();

  if (!posts.length) return <Empty resourceName="پستی" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>دسته بندی</th>
          <th>نویسنده</th>
          <th>تاریخ ایجاد</th>
          <th>نوع</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {posts.map((post, index) => (
            <PostRow key={post._id} post={post} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default PostsTable;

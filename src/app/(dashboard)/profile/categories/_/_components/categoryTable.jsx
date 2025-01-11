import Table from "@/components/ui/Table";
import Empty from "@/components/ui/Empty";
import { getAllPostsApi } from "@/services/postService";
import CategoryRow from "./categoryRow";

async function CategoryTable({ query }) {
  const { posts } = await getAllPostsApi(query);

  if (!posts.length) return <Empty resourceName="پستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان دسته بندی</th>
        <th>ایجاد کننده</th>
        <th>تاریخ ایجاد</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <CategoryRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CategoryTable;

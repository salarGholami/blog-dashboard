import Table from "@/components/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { DeleteCategory, UpdateCategory } from "./Buttons";

function CategoryRow({ post, index }) {
  const { category, author, createdAt } = post;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td> {category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateCategory />
          <DeleteCategory />
        </div>
      </td>
    </Table.Row>
  );
}
export default CategoryRow;

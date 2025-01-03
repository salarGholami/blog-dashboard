import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import { Spinner } from "@/components/ui/Spinner";

function Page() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <PostsTable />
      </Suspense>
    </div>
  );
}

export default Page;

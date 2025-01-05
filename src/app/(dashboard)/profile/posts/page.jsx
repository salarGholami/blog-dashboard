import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import { Spinner } from "@/components/ui/Spinner";
import Search from "@/components/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { getAllPostsApi } from "@/services/postService";

async function Page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getAllPostsApi();

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-800 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center"></div>
    </div>
  );
}

export default Page;

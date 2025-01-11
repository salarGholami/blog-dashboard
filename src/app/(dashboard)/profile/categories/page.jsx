import queryString from "query-string";
import { CreateCategory } from "../posts/_/components/Buttons";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/Spinner";
import CategoryTable from "./_/_components/categoryTable";
import Search from "@/components/ui/Search";

function CategoryPage({ searchParams }) {
  const query = queryString.stringify(searchParams);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-secondary-700 font-bold text-xl">لیست دسته بندی ها</h1>
        <Search />
        <CreateCategory query={query} />
      </div>

      <Suspense fallback={<Spinner />} key={query}>
        <CategoryTable query={query} />
      </Suspense>
    </div>
  );
}

export default CategoryPage;

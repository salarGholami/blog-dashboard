import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            acive: true,
          },
        ]}
      />
    </div>
  );
}

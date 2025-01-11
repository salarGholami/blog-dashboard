"use client";

import ButtonIcon from "@/components/ui/ButtonIcon";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export function CreateCategory() {
  return (
    <div
      href="/profile/posts/create"
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block text-secondary-700">
        ایجاد دسته بندی
      </span>
      <PlusIcon className="w-5 text-secondary-700" />
    </div>
  );
}

export function UpdateCategory() {
  return (
    <div>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </div>
  );
}

export function DeleteCategory() {
  return (
    <>
      <ButtonIcon variant="outline">
        <TrashIcon className="text-error" />
      </ButtonIcon>
    </>
  );
}

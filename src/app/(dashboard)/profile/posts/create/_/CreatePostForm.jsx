"use client";

import RHFSelect from "@/components/ui/RHFSelect";
import RHFTextField from "@/components/ui/RHFTextField";
import useCategories from "@/hook/useCategories";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object();

function CreatePostForm() {
  const { categories } = useCategories();

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <form className="form">
      <RHFTextField
        name="title"
        label="عنوان"
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="briefText"
        label="متن کوتاه"
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="text"
        label="متن"
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="slug"
        label="اسلاگ"
        errors={errors}
        register={register}
      />
      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        errors={errors}
        register={register}
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        errors={errors}
        register={register}
        required
        options={categories}
      />
    </form>
  );
}

export default CreatePostForm;

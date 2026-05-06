import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

import { useNavigate } from "react-router-dom";
import { API_ORIGIN } from "@/lib/apiOrigin";
const formSchema = z.object({
  title: z.string().min(5, {
    message: "Yangilik mavzusi kamida 5 ta belgidan iborat boʻlishi kerak.",
  }),
  description: z.string().min(20, {
    message: "Tavsif kamida 20 ta belgidan iborat boʻlishi kerak.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function NewsForm() {
  const [fileError, setFileError] = useState<boolean>(false);
  const [fileTarget, setFileTarget] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const navigate = useNavigate();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArray = Array.from(e.target.files || []);
    setSelectedFiles(filesArray);

    const file = filesArray[0];
    if (file) {
      const fileSize = file.size / 1024 / 1024;
      if (fileSize > 5) {
        setFileError(true);
        alert("Faqatgina 5MB kichkina fayll yuklash mumkin.");
        e.target.value = "";
        return;
      }
      if (!["image/jpeg", "image/png"].includes(file.type)) {
        setFileError(true);
        alert("Faqatgina rasm fayllarni yuklash mumkin.");
        e.target.value = "";
        return;
      }
      setFileError(false);
      setFileTarget(file);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!fileTarget) {
      setFileError(true);
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("file", fileTarget);

    selectedFiles.forEach((file) => {
      formData.append("file", file);
    });

    const requestOptions: RequestInit = {
      method: "POST",
      body: formData,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        `${API_ORIGIN}/api/add-news`,
        requestOptions
      );
      await response.json();
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <div className="">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yangilik mavzusini kiriting:</FormLabel>
                <FormControl>
                  <Input placeholder="To'liq ismingizni kiriting" {...field} />
                </FormControl>
                <FormDescription>
                  Ma'lumotlaringiz to'g'ri ekanligini tekshiring
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full pt-5">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Yangilik tavsifni kiriting</FormLabel>
                <FormControl>
                  <ReactQuill
                    className="h-[800px] max-lg:pb-5"
                    value={field.value}
                    onChange={field.onChange}
                    modules={{
                      toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ align: [] }],
                        ["link", "image", "code-block"],
                        [{ size: [] }, { font: [] }],
                      ],
                    }}
                    formats={[
                      "bold",
                      "italic",
                      "underline",
                      "strike",
                      "list",
                      "bullet",
                      "align",
                      "link",
                      "image",
                      "code-block",
                      "size",
                      "font",
                    ]}
                    placeholder="Tavsifni kiriting"
                  />
                </FormControl>
                <br />
                <br />
                <FormDescription>
                  Ma'lumotlaringiz to'g'ri ekanligini tekshiring
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="pt-5">
          <FormItem>
            <FormLabel>
              {fileError ? (
                <span className="text-destructive">
                  Yangilik asosiy suratini yuklang :
                </span>
              ) : (
                <span> Yangilik asosiy suratini yuklang :</span>
              )}
            </FormLabel>
            <FormControl>
              <div className="p-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Upload multiple files
                </label>
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  multiple
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {selectedFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="mb-2 text-sm font-medium text-gray-700">
                      Selected Files:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FormControl>
            <FormDescription>
              Yuklanadigan fayl rasm formatida va 5MB dan oshmasligi kerak.
              {fileError && (
                <p className="text-destructive pt-2 ">
                  Yangilik asosiy suratini yuklashingiz kerak
                </p>
              )}
            </FormDescription>
            <FormMessage />
          </FormItem>
        </div>
        <hr />
        <div className="flex justify-end pt-5">
          <Button type="submit" className="text-lg max-lg:w-full">
            Yangilik qo'shish
          </Button>
        </div>
      </form>
    </Form>
  );
}

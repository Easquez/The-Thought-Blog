import CreateForm from "@/app/components/CreateForm";
import { useForm } from "react-hook-form";

function CreateBlog() {
  return (
    <div>
      <div className="text-center display-3 my-5">Create a Blog</div>
      <CreateForm />
    </div>
  );
}

export default CreateBlog;

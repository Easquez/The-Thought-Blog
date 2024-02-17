import EditForm from "@/app/components/EditForm";
import BlogDetails from "../../[id]/page";
function EditBlog() {
  return (
    <div>
      <p className="display-6 text-center my-3">Your Blog Details</p>
      <BlogDetails />
      <div className="container">
        <hr />
      </div>
      <br />
      <p className="display-6 text-center my-5">
        Editing the above blog section
      </p>

      <EditForm />
    </div>
  );
}

export default EditBlog;

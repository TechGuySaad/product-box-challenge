import React from "react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const AddNewItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "http://localhost:3000/items";

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    // console.log(data);
    try {
      const response = await axios.post(url, data);
      console.log("Success:", response.data);
      console.log("Success:", response.data);
    } catch (err) {
      console.error("Error:", err);
      setError("something went wrong, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container flex flex-col w-full h-full  px-10 items-center">
      <h1>Add New item</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        style={{ maxWidth: "400px" }}
      >
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          {...register("price", { required: "Price is required" })}
          placeholder="Price"
          className="border p-2 w-full"
        />

        <input
          {...register("img", { required: "Image is required" })}
          placeholder="Image Url"
          className="border p-2 w-full"
        />
        <Link to="/">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddNewItem;

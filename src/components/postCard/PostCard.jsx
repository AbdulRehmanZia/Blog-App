import React from "react";
import service from "../../appwrite/client";
import { Link } from "react-router-dom";

const appwriteService = service;
function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl bg-gray-100 p-4">
        <div className="w-full justify-center mb-4">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </Link>
  );
}

export default PostCard;

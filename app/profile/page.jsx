"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const user = useSelector((state) => state.authPersistedReducer?.user);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${user?.value.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (user?.value.id) fetchPosts();
  }, [user?.value.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;

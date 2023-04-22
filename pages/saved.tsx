import SocialLayout from "@components/Social/SocialLayout";
import PostCard from "@components/Social/PostCard";
import { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContextProvider } from "../contexts/UserContext";
import { Database } from "@lib/database.types";

export default function SavedPostsPage() {
  const [posts, setPosts] = useState([]);
  const session = useSession();
  const supabase = useSupabaseClient<Database>();
  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("saved_posts")
      .select("post_id")
      .eq("user_id", session.user.id)
      .then((result) => {
        const postsIds = result.data.map((item) => item.post_id);
        supabase
          .from("posts")
          .select("*, profiles(*)")
          .in("id", postsIds)
          .then((result) => setPosts(result.data));
      });
  }, [session?.user?.id]);
  return (
      <SocialLayout>
        <div className="mb-32">
          <UserContextProvider>
            <h1 className="mb-4 text-6xl text-gray-300">Saved posts</h1>
            {posts.length > 0 &&
              posts.map((post) => (
                <div key={post.id}>
                  <PostCard {...post} />
                </div>
              ))}
          </UserContextProvider>
        </div>
      </SocialLayout>
  );
}

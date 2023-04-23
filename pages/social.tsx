import SocialLayout from "@components/Social/SocialLayout";
import Layout from "@components/PageLayout";
import PostFormCard from "@components/Social/PostFormCard";
import PostCard from "@components/Social/PostCard";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Social({ user }) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const userId = router.query.id;

  useEffect(() => {
    if (!userId) {
      return;
    }
    fetchUser();
  }, [userId]);

  function fetchUser() {
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setProfile(result.data[0]);
        }
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        if (result.data.length) {
          setProfile(result.data[0]);
        }
      });
  }, [session?.user?.id]);

  function fetchPosts() {
    supabase
      .from("posts")
      .select(
        "id, content, created_at, photos, profiles(id, avatar_url, username)"
      )
      .is("parent", null)
      .order("created_at", { ascending: false })
      .then((result) => {
        console.log("posts", result);
        setPosts(result.data);
      });
  }
 
  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <Layout>
        <SocialLayout>
          <div className="mb-32">
            <UserContext.Provider value={{ profile }}>
              <PostFormCard onPost={fetchPosts} />
              {posts?.length > 0 &&
                posts.map((post) => <PostCard key={post.id} {...post} />)}
            </UserContext.Provider>
          </div>
        </SocialLayout>
      </Layout>
    </>
  );
}
import Head from "next/head";
import SocialLayout from "@components/Social/SocialLayout";
import Layout from "@components/PageLayout";
import PostFormCard from "@components/Social/PostFormCard";
import PostCard from "@components/Social/PostCard";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "./login";
import { useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import angieImage from "../public/icons/apple-touch-icon.png";

export default function Social() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const userId = router.query.id;
  const user = userId === session?.user?.id;

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
      .eq("id", userId.id)
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
      .eq("id", user.id)
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
        <Head>
          <title>Social</title>
          <>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Social",
                url: "https://mansbooks.com/social",
                image: {
                  "@type": "ImageObject",
                  url: angieImage,
                  width: "1400",
                  height: "450",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Mansbooks",
                },
                license: "http://mansbooks.com/license",
              })}
              ,
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@id": "https://mansbooks.com",
                "@type": "Organization",
                address: "OKC, Middle Earth",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "donaldboulton@gmail.com",
                  telephone: "+405-863-2165",
                },
                description: "Mansbooks Profile Page",
                email: "donaldboulton@gmail.com",
                founder: {
                  "@id": "https://donboulton.com",
                },
                location: "OKC, Middle Earth",
                image: {
                  "@type": "ImageObject",
                  url: angieImage,
                  width: "1400",
                  height: "450",
                },
                logo: {
                  "@type": "ImageObject",
                  url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
                },
                name: "MansBooks Terms",
                sameAs: [
                  "mailto:donaldboulton@gmail.com",
                  "tel:+405-863-2165",
                  "https://www.facebook.com/donboulton",
                  "https://www.instagram.com/boulton3662",
                  "https://twitter.com/donboulton",
                  "https://www.linkedin.com/donboulton",
                  "https://github.com/donaldboulton/",
                ],
                url: "https://mansbooks.com",
              })}
              ,
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://donboulton.com",
                name: "Donald Boulton",
                url: "https://donboulton.com",
                worksFor: {
                  "@id": "https://mansbooks.com",
                },
              })}
              ,
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                description: "Breadcrumbs list",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    item: {
                      "@id": "https://mansbooks.com/",
                      name: "MansBooks Home",
                    },
                    position: "1",
                  },
                  {
                    "@type": "ListItem",
                    item: {
                      "@id": "https://mansbooks.com/social",
                      name: "MansBooks Social",
                    },
                    position: "2",
                  },
                ],
                numberOfItems: "2",
                name: "Breadcrumbs",
              })}
              ,
            </script>
          </>
        </Head>
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

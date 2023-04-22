import SocialLayout from "@components/Social/SocialLayout";
import Layout from "@components/PageLayout";
import Card from "@components/Social/Card";
import Avatar from "@components/Social/SocialAvatar";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Layout>
      <SocialLayout>
        <div className="mb-32">
          <h1 className="mb-4 text-6xl text-gray-300">Notifications</h1>
          <Card noPadding={true}>
            <div>
              <div className="flex items-center gap-2 border-b border-b-gray-800 p-4">
                <Link href={"/profile"}>
                  <Avatar />
                </Link>
                <div>
                  <Link
                    href={"/profile"}
                    className={"mr-1 font-semibold hover:underline"}
                  >
                    John Doe
                  </Link>
                  liked
                  <Link
                    href={""}
                    className={"ml-1 text-socialBlue hover:underline"}
                  >
                    your photo
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 border-b border-b-gray-800 p-4">
                <Link href={"/profile"}>
                  <Avatar />
                </Link>
                <div>
                  <Link
                    href={"/profile"}
                    className={"mr-1 font-semibold hover:underline"}
                  >
                    John Doe
                  </Link>
                  liked
                  <Link
                    href={""}
                    className={"ml-1 text-socialBlue hover:underline"}
                  >
                    your photo
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 border-b border-b-gray-800 p-4">
                <Link href={"/profile"}>
                  <Avatar />
                </Link>
                <div>
                  <Link
                    href={"/profile"}
                    className={"mr-1 font-semibold hover:underline"}
                  >
                    John Doe
                  </Link>
                  liked
                  <Link
                    href={""}
                    className={"ml-1 text-socialBlue hover:underline"}
                  >
                    your photo
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </SocialLayout>
    </Layout>
  );
}

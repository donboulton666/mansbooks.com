import Avatar from "./SocialAvatar";

export default function FriendInfo() {
  return (
    <div className="flex gap-2" data-datocms-noindex>
      <Avatar />
      <div>
        <h3 className="text-xl font-bold">Jane Doe</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  );
}

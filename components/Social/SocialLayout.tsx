import NavigationCard from "./NavigationCard";

export default function SocialLayout({ children, hideNavigation }) {
  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-9/12";
  }
  return (
    <div className="mx-auto mb-24 mt-4 max-w-4xl gap-6 md:mb-0 md:flex">
      {!hideNavigation && (
        <div className="fixed bottom-0 -mb-5 w-full md:static md:w-3/12">
          <NavigationCard />
        </div>
      )}
      <div className={rightColumnClasses}>{children}</div>
    </div>
  );
}

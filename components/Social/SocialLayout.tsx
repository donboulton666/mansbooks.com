import NavigationCard from "./NavigationCard";

export default function SocialLayout({ children, hideNavigation }) {
  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-8/12";
  }
  return (
    <div
      className="ml-20 mt-8 max-w-5xl gap-6 md:mb-0 md:flex"
      data-datocms-noindex
    >
      {!hideNavigation && (
        <div className="fixed top-0 -mb-5 w-full md:static md:w-4/12">
          <NavigationCard />
        </div>
      )}
      <div className={rightColumnClasses}>{children}</div>
    </div>
  );
}

import { StructuredText, Image } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="center mx-auto max-w-4xl">
      <div className="text-slate-300" id="main-content">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "ImageBlockRecord") {
              return <Image data={record.image.responsiveImage} />;
            }

            return (
              <>
                <div>Don't know how to render a block!</div>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

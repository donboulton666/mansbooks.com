export async function uploadUserProfileImage(
  supabase: {
    storage: {
      from: (arg0: any) => {
        (): any;
        new (): any;
        upload: {
          (arg0: any, arg1: any):
            | PromiseLike<{ data: any; error: any }>
            | { data: any; error: any };
          new (): any;
        };
      };
    };
    from: (arg0: string) => {
      (): any;
      new (): any;
      update: {
        (arg0: { [x: number]: string }): {
          (): any;
          new (): any;
          eq: {
            (arg0: string, arg1: any): Promise<{ error: any }>;
            new (): any;
          };
        };
        new (): any;
      };
    };
  },
  userId: any,
  file: { name: number },
  bucket: any,
  profileColumn: any
) {
  return new Promise<void>(async (resolve, reject) => {
    const newName = Date.now() + file.name;
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(newName, file);

    if (error) throw error;
    if (data) {
      const avatar_url =
        process.env.NEXT_PUBLIC_SUPABASE_URL +
        `/storage/v1/object/public/${bucket}/` +
        data.path;
      supabase
        .from("profiles")
        .update({
          [profileColumn]: avatar_url,
        })
        .eq("id", userId)
        .then((result: { error: any }) => {
          if (!result.error) {
            resolve();
          } else {
            throw result.error;
          }
        });
    }
  });
}

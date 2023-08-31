export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      applause: {
        Row: {
          count: number | null;
          created_at: string | null;
          id: number;
          slug: string;
        };
        Insert: {
          count?: number | null;
          created_at?: string | null;
          id?: number;
          slug?: string;
        };
        Update: {
          count?: number | null;
          created_at?: string | null;
          id?: number;
          slug?: string;
        };
        Relationships: [];
      };
      channels: {
        Row: {
          created_by: string;
          id: number;
          inserted_at: string;
          slug: string;
        };
        Insert: {
          created_by: string;
          id?: number;
          inserted_at?: string;
          slug: string;
        };
        Update: {
          created_by?: string;
          id?: number;
          inserted_at?: string;
          slug?: string;
        };
        Relationships: [
          {
            foreignKeyName: "channels_created_by_fkey";
            columns: ["created_by"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      comments: {
        Row: {
          created_at: string | null;
          id: string;
          payload: string | null;
          reply_of: string | null;
          slug: string;
          updated_at: string | null;
          username: string | null;
          writer_email: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          payload?: string | null;
          reply_of?: string | null;
          slug: string;
          updated_at?: string | null;
          username?: string | null;
          writer_email?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          payload?: string | null;
          reply_of?: string | null;
          slug?: string;
          updated_at?: string | null;
          username?: string | null;
          writer_email?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "comments_username_fkey";
            columns: ["username"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      github_users: {
        Row: {
          createdAt: string;
          id: string;
          userData: Json | null;
        };
        Insert: {
          createdAt?: string;
          id: string;
          userData?: Json | null;
        };
        Update: {
          createdAt?: string;
          id?: string;
          userData?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "github_users_id_fkey";
            columns: ["id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      likes: {
        Row: {
          created_at: string | null;
          id: number;
          post_id: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          post_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          post_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "likes_post_id_fkey";
            columns: ["post_id"];
            referencedRelation: "posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "likes_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      loves: {
        Row: {
          count: number | null;
          created_at: string | null;
          email: string | null;
          id: number;
          slug: string;
          user_id: string;
        };
        Insert: {
          count?: number | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          slug?: string;
          user_id: string;
        };
        Update: {
          count?: number | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          slug?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "loves_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      messages: {
        Row: {
          channel_id: number;
          id: number;
          inserted_at: string;
          message: string | null;
          user_id: string;
        };
        Insert: {
          channel_id: number;
          id?: number;
          inserted_at?: string;
          message?: string | null;
          user_id: string;
        };
        Update: {
          channel_id?: number;
          id?: number;
          inserted_at?: string;
          message?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "messages_channel_id_fkey";
            columns: ["channel_id"];
            referencedRelation: "channels";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      posts: {
        Row: {
          author: string | null;
          content: string | null;
          created_at: string | null;
          email: string | null;
          id: number;
          parent: number | null;
          photos: Json | null;
          user_id: string | null;
        };
        Insert: {
          author?: string | null;
          content?: string | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          parent?: number | null;
          photos?: Json | null;
          user_id?: string | null;
        };
        Update: {
          author?: string | null;
          content?: string | null;
          created_at?: string | null;
          email?: string | null;
          id?: number;
          parent?: number | null;
          photos?: Json | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "posts_author_fkey";
            columns: ["author"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "posts_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["username"];
          },
        ];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          cover: string | null;
          full_name: string | null;
          id: string;
          place: string | null;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          cover?: string | null;
          full_name?: string | null;
          id: string;
          place?: string | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          cover?: string | null;
          full_name?: string | null;
          id?: string;
          place?: string | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      role_permissions: {
        Row: {
          id: number;
          permission: Database["public"]["Enums"]["app_permission"];
          role: Database["public"]["Enums"]["app_role"];
        };
        Insert: {
          id?: number;
          permission: Database["public"]["Enums"]["app_permission"];
          role: Database["public"]["Enums"]["app_role"];
        };
        Update: {
          id?: number;
          permission?: Database["public"]["Enums"]["app_permission"];
          role?: Database["public"]["Enums"]["app_role"];
        };
        Relationships: [];
      };
      saved_posts: {
        Row: {
          created_at: string | null;
          id: number;
          post_id: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          post_id?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          post_id?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "saved_posts_post_id_fkey";
            columns: ["post_id"];
            referencedRelation: "posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "saved_posts_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      todos: {
        Row: {
          id: number;
          inserted_at: string;
          is_complete: boolean | null;
          task: string | null;
          user_id: string;
        };
        Insert: {
          id?: number;
          inserted_at?: string;
          is_complete?: boolean | null;
          task?: string | null;
          user_id: string;
        };
        Update: {
          id?: number;
          inserted_at?: string;
          is_complete?: boolean | null;
          task?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      user_roles: {
        Row: {
          id: number;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Insert: {
          id?: number;
          role: Database["public"]["Enums"]["app_role"];
          user_id: string;
        };
        Update: {
          id?: number;
          role?: Database["public"]["Enums"]["app_role"];
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      users: {
        Row: {
          email: string | null;
          id: string;
          name: string | null;
          status: Database["public"]["Enums"]["user_status"] | null;
          ticketNumber: string | null;
          username: string | null;
        };
        Insert: {
          email?: string | null;
          id: string;
          name?: string | null;
          status?: Database["public"]["Enums"]["user_status"] | null;
          ticketNumber?: string | null;
          username?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string;
          name?: string | null;
          status?: Database["public"]["Enums"]["user_status"] | null;
          ticketNumber?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      views: {
        Row: {
          count: number | null;
          created_at: string | null;
          id: number;
          slug: string;
        };
        Insert: {
          count?: number | null;
          created_at?: string | null;
          id?: number;
          slug?: string;
        };
        Update: {
          count?: number | null;
          created_at?: string | null;
          id?: number;
          slug?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"];
          user_id: string;
        };
        Returns: boolean;
      };
      delete_avatar: {
        Args: {
          avatar_url: string;
        };
        Returns: Record<string, unknown>;
      };
      delete_storage_object: {
        Args: {
          bucket: string;
          object: string;
        };
        Returns: Record<string, unknown>;
      };
      increment:
        | {
            Args: {
              row_id: number;
            };
            Returns: undefined;
          }
        | {
            Args: {
              slug_text: string;
            };
            Returns: undefined;
          };
    };
    Enums: {
      app_permission: "channels.delete" | "messages.delete";
      app_role: "admin" | "moderator";
      user_status: "ONLINE" | "OFFLINE";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

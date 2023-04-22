export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      discord_promise_challenge: {
        Row: {
          email: string | null;
          id: number;
          inserted_at: string;
          promise: string;
          resolved: boolean | null;
          submission: string | null;
          updated_at: string;
          user_id: string;
          username: string;
        };
        Insert: {
          email?: string | null;
          id?: number;
          inserted_at?: string;
          promise: string;
          resolved?: boolean | null;
          submission?: string | null;
          updated_at?: string;
          user_id: string;
          username: string;
        };
        Update: {
          email?: string | null;
          id?: number;
          inserted_at?: string;
          promise?: string;
          resolved?: boolean | null;
          submission?: string | null;
          updated_at?: string;
          user_id?: string;
          username?: string;
        };
      };
      github_users: {
        Row: {
          createdAt: string;
          id: string;
          userData: Json | null;
        };
        Insert: {
          createdAt?: string;
          id?: string;
          userData?: Json | null;
        };
        Update: {
          createdAt?: string;
          id?: string;
          userData?: Json | null;
        };
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
      };
      posts: {
        Row: {
          author: string | null;
          content: string | null;
          created_at: string | null;
          id: number;
          parent: number | null;
          photos: Json | null;
        };
        Insert: {
          author?: string | null;
          content?: string | null;
          created_at?: string | null;
          id?: number;
          parent?: number | null;
          photos?: Json | null;
        };
        Update: {
          author?: string | null;
          content?: string | null;
          created_at?: string | null;
          id?: number;
          parent?: number | null;
          photos?: Json | null;
        };
      };
      profiles: {
        Row: {
          avatar: string | null;
          avatar_url: string | null;
          cover: string | null;
          full_name: string | null;
          id: string;
          name: string | null;
          place: string | null;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar?: string | null;
          avatar_url?: string | null;
          cover?: string | null;
          full_name?: string | null;
          id: string;
          name?: string | null;
          place?: string | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar?: string | null;
          avatar_url?: string | null;
          cover?: string | null;
          full_name?: string | null;
          id?: string;
          name?: string | null;
          place?: string | null;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
      };
      "saved-posts": {
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
      };
      users: {
        Row: {
          createdAt: string;
          email: string | null;
          id: string;
          name: string | null;
          ticketNumber: number;
          username: string | null;
        };
        Insert: {
          createdAt?: string;
          email?: string | null;
          id: string;
          name?: string | null;
          ticketNumber?: number;
          username?: string | null;
        };
        Update: {
          createdAt?: string;
          email?: string | null;
          id?: string;
          name?: string | null;
          ticketNumber?: number;
          username?: string | null;
        };
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
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
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
      increment: {
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

interface Views {
  count: number;
}

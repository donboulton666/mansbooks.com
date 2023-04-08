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
      posts: {
        Row: {
          content: string;
          created_at: string;
          id: number;
          user_id: string | null;
        };
        Insert: {
          content: string;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          content?: string;
          created_at?: string;
          id?: number;
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
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
interface Views {
  count: number;
}

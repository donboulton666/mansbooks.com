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

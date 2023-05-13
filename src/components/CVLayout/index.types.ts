export interface ColumnEntry {
  label: string;
  values: string[] | number[];
  key?: string;
}

export interface TableData {
  title: string;
  columns: Array<ColumnEntry>;
}

export interface CV {
  archived: boolean;
  description: string;
  name: string;
  metadata: TableData[];
  slug: string;
  id: number;
  images?: Array<{ id: number; cid: string }>;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    role: string;
    phone: string;
  }


interface PaginationProps {
  limit: number;
  offset: number;
}

interface Pagination extends PaginationProps {
  total: number;
}

interface PaginationData<T extends object> {
  pagination: Pagination;
  data: T[];
}
export type { Pagination, PaginationProps, PaginationData };
export interface AdminNewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export interface ContactMessageItem {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  company: string;
  message: string;
  createdAt: string;
  read: boolean;
}

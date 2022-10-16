export interface NotificationSubscription {
  id: string;
  active: boolean;
  cities: string[];
  keywords: string[];
  user: User;
}

export interface User {
  id?: string;
  email: string;
}

export interface NewJobPosting {
  id?: string;
  title: string;
  city: string;
}

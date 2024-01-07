export interface IBook {
  title: string;
  cover: string;
  subtitle?: string;
  ISBN: string;
  publisher: string;
  format: "Hardback" | "Paperback";
  authorsAndContributors: string;
  slug: string;
  status?: "pending" | "active";
  isDeleted: boolean;
  year: number;
  nunberOfPages: number;
  description: string;
}

export interface Blog {
  content: string,
  title: string,
  id: string,
  published: boolean,
  author: {
    name: string
  }
}

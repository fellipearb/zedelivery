import { gql } from "apollo-boost";

const CATEGORY = gql`
query allCategoriesSearch {
  allCategory{
    title
    id
  }
}`;

export default CATEGORY;

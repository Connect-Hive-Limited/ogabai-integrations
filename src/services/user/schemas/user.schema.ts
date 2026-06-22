export const userSchema = {

  // test features 
  getTestFeatureEnabled: (query: string) => `
    query getTestFeatureEnabled {
      getTestFeatureEnabled {
        ${query}
      }
    }
  `,
  getTestFeatures: (query: string) => `
    query getTestFeatures {
      getTestFeatures {
        ${query}
      }
    }
  `,
  // admin dashboard stats
  getUserTypeCounts: (query: string) => `
    query getUserTypeCounts {
      getUserTypeCounts {
        ${query}
      }
    }
  `,
  getMonthlyUserStatsByYear: (query: string) => `
    query getMonthlyUserStatsByYear($year: Int!) {
      getMonthlyUserStatsByYear(year: $year) {
        ${query}
      }
    }
  `,
  // mobile dashboard stats
  getUserDashStats: (query: string) => `
    query getUserDashStats($storeId: String!) {
      getUserDashStats(storeId: $storeId) {
        ${query}
      }
    }
  `,
  me: (query: string) => `
    query me {
      me {
        ${query}
      }
    }
  `,
  getUser: (query: string) => `
    query getUser($user: UserInput!) {
      user(user: $user) {
        ${query}
      }
    }
  `,

  getUsers: (query: string) => `
    query getUsers($user: UserInput, $userIds: [String], $limit: Int!, $skip: Int!) {
      getUsers(user: $user, userIds: $userIds, limit: $limit, skip: $skip) {
        ${query}
      }
    }
  `,
  updateUser: (query: string) => `
    mutation updateUser($userId: String!, $user: UserInput, $imageType: String) {
      updateUser(userId: $userId, user: $user, imageType: $imageType) {
        ${query}
      }
    }
  `,
}

export default userSchema
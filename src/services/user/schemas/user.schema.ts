export const userSchema = {
  getUserDashStats: (query: string) => `
    query getUserDashStats {
      getUserDashStats {
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
      users(user: $user, userIds: $userIds, limit: $limit, skip: $skip) {
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
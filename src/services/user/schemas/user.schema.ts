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
  updateUser: (mutation: string) => `
    mutation updateUser($userId: String!, $userUpdate: UpdateUserFieldInput, $imageType: String) {
      updateUser(userId: $userId, userUpdate: $userUpdate, imageType: $imageType) {
        ${mutation}
      }
    }
  `,
}

export default userSchema
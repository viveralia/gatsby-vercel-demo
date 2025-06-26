import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { User } from "../utils/types";
import { getUsers } from "../utils/client";

const IndexPage: React.FC<PageProps> = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch users");
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <main>
        <h1>Users</h1>
        <p>Loading users...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Users</h1>
        <p style={{ color: "red" }}>Error: {error}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

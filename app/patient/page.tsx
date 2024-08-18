import { connectDB } from "@/lib/mongodb";
import UserHealth from "@/models/UserHealth";

const UserList = async () => {
  await connectDB();
  const users:any[] = await UserHealth.find({});
  //render the _id, name, email and phone of each user
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList
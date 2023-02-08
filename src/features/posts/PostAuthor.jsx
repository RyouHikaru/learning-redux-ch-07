import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === Number(userId));

  return <span>— {author ? author.name : "無名"}</span>;
};

export default PostAuthor;

import { Card, Button } from "..";
import { useState, useEffect } from "react";
import { API_PATH, USERS_PER_PAGE } from "../../constants";

export const GetSection = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isShowMoreDisabled, setIsShowMoreDisabled] = useState(false);

  useEffect(() => {
    setIsShowMoreDisabled(true);

    fetch(`${API_PATH}users?page=${page}&count=${USERS_PER_PAGE}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data = ", data)
        const existingUserIds = new Set(users.map((user) => user.id));
        const newUsers = data.users.filter(
          (user) => !existingUserIds.has(user.id),
        );

        setUsers([...users, ...newUsers]);
        setIsShowMoreDisabled(!data?.links?.next_url);
      });
  }, [page]);

  return (
    <div className={"px-4 pt-[140px] md:px-8  lg:px-14"}>
      <h2 className={"mb-[50px] text-center text-4xl font-normal text-black"}>
        Our professionals
      </h2>

      <div
        className={
          "mb-[50px] flex flex-col flex-wrap gap-5 md:flex-row md:gap-4 lg:gap-7"
        }
      >
        {users.map((user) => (
          <Card {...user} key={user.id} />
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={() => setPage(page + 1)}
          disabled={isShowMoreDisabled}
          className={"px-5"}
        >
          Show more
        </Button>
      </div>
    </div>
  );
};

import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Link,
  Typography,
} from "@mui/material";
import { Store } from "../store";
import { observer } from "mobx-react-lite";

const UserCard = observer(() => {
  const { userData, errorMessage, isLoading } = Store;

  return (
    <Box sx={{ width: "300px", mt: 2 }}>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : null}

      {userData !== null ? (
        <Card>
          <CardHeader
            avatar={<Avatar alt="User Avatar" src={userData.avatar_url} />}
            title={userData.name}
            subheader={userData.bio}
          />
          <CardContent>
            <Link target="_blank" href={userData.html_url} underline="none">
              Link
            </Link>
          </CardContent>
        </Card>
      ) : null}

      <Typography color={"red"}>{errorMessage && errorMessage}</Typography>
    </Box>
  );
});

export default UserCard;

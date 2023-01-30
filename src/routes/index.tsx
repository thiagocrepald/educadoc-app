import React, { useContext, useEffect, useState } from "react";

import { View, ActivityIndicator } from "react-native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthContext } from "../context/AuthContext";

export function Routes() {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#0C7384",
      }}
    >
      <ActivityIndicator size={50} color="#fff" />
    </View>;
  }
  switch (user?.status) {
    case "mentor":
      return <AdminRoutes />;
    case "estudante":
      return <AppRoutes />;
    default:
      return <AuthRoutes />;
  }
}

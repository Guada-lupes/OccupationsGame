import React, { useState, useEffect } from "react";

const USER_KEY = "user";

export const useUser = () => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem(USER_KEY);
    return stored
      ? JSON.parse(stored)
      : {
          name: "user",
          avatar: undefined,
          actividades: [],
          ocupaciones: [],
          ocupacionesGuardadas: [],
        };
  });
    // Actualiza localStorage cada vez que el usuario cambia
  useEffect(() => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }, [user]);

  // Funciones para actualizar partes del usuario
  const updateName = (name) => setUser((prev) => ({ ...prev, name }));
  const updateAvatar = (avatar) => setUser((prev) => ({ ...prev, avatar }));
  const addActividad = (id) =>
    setUser((prev) => ({
      ...prev,
      actividades: [...new Set([...prev.actividades, id])]
    }));
  const addOcupacion = (nombre) =>
    setUser((prev) => ({
      ...prev,
      ocupaciones: [...new Set([...prev.ocupaciones, nombre])]
    }));
  const guardarOcupacion = (nombre) =>
    setUser((prev) => ({
      ...prev,
      ocupacionesGuardadas: [...new Set([...prev.ocupacionesGuardadas, nombre])]
    }));
  const setPassword = (password) =>
    setUser((prev) => ({ ...prev, password }));

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  return {
    user,
    updateName,
    updateAvatar,
    addActividad,
    addOcupacion,
    guardarOcupacion,
    setPassword,
    logout
  };
};


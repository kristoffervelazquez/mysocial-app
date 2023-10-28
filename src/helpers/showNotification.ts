import * as Notifications from "expo-notifications";

interface NotificationProps {
  title: string;
  body: string;
}

export const showNotification = async ({ title, body }: NotificationProps) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const { status } = await Notifications.requestPermissionsAsync();
  if (status === "granted") {
    // Configura la notificación
    const notificacion = {
      content: {
        title: title,
        body: body,
        data: { data: "goes here" },
      },
      
      trigger: {
        seconds: 1,
      },
    };
    // Programa la notificación
    try {
      await Notifications.scheduleNotificationAsync(notificacion);
    } catch (error) {
      console.log(error);
    }
  } else {
    alert("La aplicación no tiene permisos para notificaciones.");
  }
};

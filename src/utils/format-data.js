export function formatDate(dateStr) {
  const dateObj = new Date(dateStr);
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(dateObj);
  return formattedDate;
}

export function formatDateFirebase(obj) {
  const updatedAt = new Date(obj.seconds * 1000);
  const formattedDate = `${updatedAt.toLocaleDateString()} ${updatedAt.toLocaleTimeString()}`;
  return formattedDate;
}
